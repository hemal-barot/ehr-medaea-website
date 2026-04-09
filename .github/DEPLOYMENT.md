# Medaea Website — Dev Deployment Pipeline

## Architecture

```
Push to develop
      │
      ▼
GitHub Actions (deploy-dev.yml)
      │
      ├── npm ci + npm run build
      │
      ├── AWS S3  ◄─── Static files (dist/)
      │
      ├── CloudFront ◄─── CDN + HTTPS (origin: S3)
      │
      └── Route53 ──► dev.mdaea-ai.click (alias → CloudFront)
```

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `deploy-dev.yml` | Push to `develop` or manual | Build & deploy to dev |
| `destroy-dev.yml` | Manual only | Tear down dev infrastructure |

## GitHub Secrets Required

Go to: **GitHub → Medaea-Development/ehr-medaea-website → Settings → Secrets and variables → Actions**

Add the following secrets:

| Secret | Description | Example |
|--------|-------------|---------|
| `AWS_ACCESS_KEY_ID` | IAM user access key | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key | `wJalr...` |
| `AWS_REGION` | AWS region | `us-east-1` |
| `DEV_S3_BUCKET` | S3 bucket name for dev | `medaea-website-dev` |
| `DEV_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID | `E1ABCDEF123456` |
| `ROUTE53_HOSTED_ZONE_ID` | Hosted zone ID for mdaea-ai.click | `Z1ABCDEF123456` |

## One-time AWS Setup (do once before first deploy)

### 1. Create S3 Bucket
```bash
aws s3api create-bucket \
  --bucket medaea-website-dev \
  --region us-east-1

# Block all public access (CloudFront will serve content)
aws s3api put-public-access-block \
  --bucket medaea-website-dev \
  --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

### 2. Create CloudFront Distribution
- **Origin**: S3 bucket (use Origin Access Control, not public)
- **Default root object**: `index.html`
- **Custom error pages**: 404 → `/index.html` (status 200, for React SPA routing)
- **Alternate domain names (CNAMEs)**: `dev.mdaea-ai.click`
- **SSL certificate**: Request via ACM in `us-east-1` for `*.mdaea-ai.click`
- **Price class**: Use All Edge Locations or US/EU only

### 3. S3 Bucket Policy (allow CloudFront only)
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AllowCloudFrontOAC",
    "Effect": "Allow",
    "Principal": {
      "Service": "cloudfront.amazonaws.com"
    },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::medaea-website-dev/*",
    "Condition": {
      "StringEquals": {
        "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
      }
    }
  }]
}
```

### 4. Route53 (auto-managed by pipeline)
The pipeline automatically creates/updates an **A alias** record:
- `dev.mdaea-ai.click` → CloudFront distribution domain

The hosted zone for `mdaea-ai.click` must already exist in Route53.

### 5. IAM Permissions for GitHub Actions user
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject","s3:DeleteObject","s3:GetObject","s3:ListBucket","s3:GetBucketLocation"],
      "Resource": ["arn:aws:s3:::medaea-website-dev","arn:aws:s3:::medaea-website-dev/*"]
    },
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation","cloudfront:GetDistribution","cloudfront:GetDistributionConfig","cloudfront:UpdateDistribution"],
      "Resource": "arn:aws:cloudfront::*:distribution/DEV_DISTRIBUTION_ID"
    },
    {
      "Effect": "Allow",
      "Action": ["route53:ChangeResourceRecordSets","route53:ListResourceRecordSets"],
      "Resource": "arn:aws:route53:::hostedzone/HOSTED_ZONE_ID"
    },
    {
      "Effect": "Allow",
      "Action": ["s3api:CreateBucket","s3:PutBucketVersioning","s3api:PutPublicAccessBlock","s3api:HeadBucket"],
      "Resource": "arn:aws:s3:::medaea-website-dev"
    }
  ]
}
```

## Destroy / Rollback

To tear down the dev environment (e.g. if something breaks):

1. Go to **Actions → Destroy Dev Infrastructure → Run workflow**
2. Type `destroy-dev` in the confirmation field
3. Provide a reason
4. Click **Run workflow**

This will:
- Remove the Route53 DNS alias
- Disable the CloudFront distribution
- Empty the S3 bucket

To redeploy after destruction: push to `develop` or run the deploy workflow manually.
