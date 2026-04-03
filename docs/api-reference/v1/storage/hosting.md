# OVHcloud Hosting API Documentation (v1)

This document describes the available operations in the **OVHcloud Hosting API v1** for managing web hosting services, domains, CDN configurations, and related features.

---

## Overview

The OVHcloud Hosting API v1 provides a set of RESTful endpoints to interact with web hosting services, manage domains, and configure CDN settings. The API follows OVH's standard authentication model using application keys, secrets, and consumer keys.

All endpoints require authentication unless explicitly marked as `noAuthentication: true`.

---

## Authentication

To use the OVHcloud Hosting API v1, you need to authenticate using the following credentials:

- **Host**: The API host URL (e.g., `api.ovh.com` or regional variants).
- **Application Key**: Your application key provided by OVHcloud.
- **Application Secret**: Your application secret provided by OVHcloud.
- **Consumer Key**: Your consumer key generated via the OVHcloud API.

These credentials are typically provided via the `OvhCloudApi` credential type in n8n.

---

## Available Operations

### Web Hosting Services

#### List Available Services

- **Path**: `/hosting/web`
- **HTTP Method**: `GET`
- **Description**: List all available web hosting services.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **iamTags** (optional): Filter resources on IAM tags.
    - **Type**: `map[string][]iam.resource.TagFilter`
    - **Param Type**: `query`
    - **Required**: No
    - **Description**: Filter resources on IAM tags.
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/hosting/web" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Get Service Properties

- **Path**: `/hosting/web/{serviceName}`
- **HTTP Method**: `GET`
- **Description**: Retrieve properties for a specific web hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
- **Response Type**: `hosting.web.ServiceWithIAM`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/hosting/web/$SERVICE_NAME" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Update Service Properties

- **Path**: `/hosting/web/{serviceName}`
- **HTTP Method**: `PUT`
- **Description**: Update properties for a specific web hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **Request Body** (required): The updated service properties.
    - **Type**: `hosting.web.Service`
    - **Param Type**: `body`
    - **Full Type**: `hosting.web.Service`
    - **Description**: Request Body.
- **Response Type**: `void`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:edit`
  - **Required**: Yes

**Example Request**:

```bash
curl -X PUT "https://api.ovh.com/hosting/web/$SERVICE_NAME" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY" \
  -d '{
    "property1": "value1",
    "property2": "value2"
  }'
```

---

### Domains and Subdomains

#### Find Hosting Service Linked to a Domain

- **Path**: `/hosting/web/attachedDomain`
- **HTTP Method**: `GET`
- **Description**: Find the web hosting service linked to a specific domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **domain** (query, required): The domain name to search for.
    - **Type**: `string`
    - **Param Type**: `query`
    - **Full Type**: `string`
    - **Description**: Domain used into web hosting attached domains.
- **Response Type**: `string[]`
- **IAM Actions**:
  - **Name**: `account:apiovh:webHosting/attachedDomain/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/hosting/web/attachedDomain?domain=$DOMAIN" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### List Attached Domains

- **Path**: `/hosting/web/{serviceName}/attachedDomain`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of domains or subdomains attached to your hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **domain** (query, optional): Filter by domain name.
    - **Type**: `string`
    - **Param Type**: `query`
    - **Full Type**: `string`
    - **Description**: Filter the value of domain property (like).
  - **path** (query, optional): Filter by path.
    - **Type**: `string`
    - **Param Type**: `query`
    - **Full Type**: `string`
    - **Description**: Filter the value of path property (like).
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
- **Response Type**: `string[]`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:attachedDomain/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Get Attached Domain Properties

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}`
- **HTTP Method**: `GET`
- **Description**: Retrieve properties for a specific attached domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.attachedDomain.PublicAttachedDomain`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:attachedDomain/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Create an Attached Domain

- **Path**: `/hosting/web/{serviceName}/attachedDomain`
- **HTTP Method**: `POST`
- **Description**: Link a new domain or subdomain to your hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **Request Body** (required): The domain to attach.
    - **Type**: `hosting.web.AttachedDomain`
    - **Param Type**: `body`
    - **Full Type**: `hosting.web.AttachedDomain`
    - **Description**: Request Body.
- **Response Type**: `hosting.web.PublicTask`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:attachedDomain/create`
  - **Required**: Yes

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY" \
  -d '{
    "domain": "example.com"
  }'
```

---

#### Update Attached Domain Properties

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}`
- **HTTP Method**: `PUT`
- **Description**: Update properties for a specific attached domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
  - **Request Body** (required): The updated domain properties.
    - **Type**: `hosting.web.AttachedDomain`
    - **Param Type**: `body`
    - **Full Type**: `hosting.web.AttachedDomain`
    - **Description**: Request Body.
- **Response Type**: `void`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:attachedDomain/edit`
  - **Required**: Yes

**Example Request**:

```bash
curl -X PUT "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY" \
  -d '{
    "property1": "value1",
    "property2": "value2"
  }'
```

---

#### Unlink Attached Domain

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}`
- **HTTP Method**: `DELETE`
- **Description**: Remove a domain or subdomain from your hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **bypassDNSConfiguration** (query, optional): If set to `true`, the DNS zone will not be updated by the operation.
    - **Type**: `boolean`
    - **Param Type**: `query`
    - **Full Type**: `boolean`
    - **Description**: If set to true, DNS zone will not be updated by the operation.
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.PublicTask`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:attachedDomain/delete`
  - **Required**: Yes

**Example Request**:

```bash
curl -X DELETE "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Get Attached Domain DNS Status

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/digStatus`
- **HTTP Method**: `GET`
- **Description**: Retrieve DNS status for a specific attached domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.attachedDomain.DigStatus`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:attachedDomain/digStatus/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/digStatus" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Purge Attached Domain Cache

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache`
- **HTTP Method**: `POST`
- **Description**: Purge the cache for a specific attached domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.task`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:attachedDomain/purgeCache`
  - **Required**: Yes

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/purgeCache" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Restart Virtual Host

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/restart`
- **HTTP Method**: `POST`
- **Description**: Restart the virtual host for a specific attached domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.task`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:attachedDomain/restart`
  - **Required**: Yes

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/restart" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

### SSL Certificates

#### Get Hosted SSL Properties

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/ssl`
- **HTTP Method**: `GET`
- **Description**: Retrieve properties for a hosted SSL certificate.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.SSL`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:ssl/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/ssl" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Create Free Default Hosted SSL

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/ssl`
- **HTTP Method**: `POST`
- **Description**: Create a free default Hosted SSL certificate for the domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.SSL`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:ssl/create`
  - **Required**: Yes

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/ssl" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Update Hosted SSL Certificate

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/ssl`
- **HTTP Method**: `PUT`
- **Description**: Update properties for a hosted SSL certificate.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
  - **Request Body** (required): The updated SSL properties.
    - **Type**: `hosting.web.SSLUpdateInput`
    - **Param Type**: `body`
    - **Full Type**: `hosting.web.SSLUpdateInput`
    - **Description**: Request Body.
- **Response Type**: `hosting.web.SSL`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:ssl/edit`
  - **Required**: Yes

**Example Request**:

```bash
curl -X PUT "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/ssl" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY" \
  -d '{
    "property1": "value1",
    "property2": "value2"
  }'
```

---

#### Delete Hosted SSL Certificate

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/ssl`
- **HTTP Method**: `DELETE`
- **Description**: Remove a hosted SSL certificate from the domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.SSL`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:ssl/delete`
  - **Required**: Yes

**Example Request**:

```bash
curl -X DELETE "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/ssl" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Regenerate Hosted SSL Certificate

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/ssl/regenerate`
- **HTTP Method**: `POST`
- **Description**: Regenerate a hosted SSL certificate.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.SSL`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:ssl/regenerate`
  - **Required**: Yes

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/ssl/regenerate" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Get Hosted SSL Report

- **Path**: `/hosting/web/{serviceName}/attachedDomain/{domain}/ssl/report`
- **HTTP Method**: `GET`
- **Description**: Retrieve the report for a hosted SSL certificate.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domain** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain.
- **Response Type**: `hosting.web.ssl.Report`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:ssl/report/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/attachedDomain/$DOMAIN/ssl/report" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

### Local SEO

#### Get List of Directories for Local SEO

- **Path**: `/hosting/web/{serviceName}/localSeo/directoriesList`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of directories associated with a Local SEO offer and country.
- **Authentication**: Not required (`noAuthentication: true`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **country** (query, required): The country for which to retrieve directories.
    - **Type**: `hosting.web.localSeo.location.CountryEnum`
    - **Param Type**: `query`
    - **Full Type**: `hosting.web.localSeo.location.CountryEnum`
    - **Description**: Country of the location.
  - **offer** (query, required): The Local SEO offer.
    - **Type**: `hosting.web.localSeo.location.OfferEnum`
    - **Param Type**: `query`
    - **Full Type**: `hosting.web.localSeo.location.OfferEnum`
    - **Description**: Local SEO offer.
- **Response Type**: `hosting.web.localSeo.DirectoriesList`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/localSeo/directoriesList?country=$COUNTRY&offer=$OFFER" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Check Email Availability for Local SEO

- **Path**: `/hosting/web/{serviceName}/localSeo/emailAvailability`
- **HTTP Method**: `GET`
- **Description**: Check if an email address is available for a Local SEO order.
- **Authentication**: Not required (`noAuthentication: true`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **email** (query, required): The email address to check.
    - **Type**: `string`
    - **Param Type**: `query`
    - **Full Type**: `string`
    - **Description**: The email address to check.
- **Response Type**: `hosting.web.localSeo.EmailAvailability`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/localSeo/emailAvailability?email=$EMAIL" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Check Visibility of a Location

- **Path**: `/hosting/web/{serviceName}/localSeo/visibilityCheck`
- **HTTP Method**: `POST`
- **Description**: Check the visibility of a location for Local SEO.
- **Authentication**: Not required (`noAuthentication: true`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **country** (body, required): The country of the location.
    - **Type**: `hosting.web.localSeo.location.CountryEnum`
    - **Param Type**: `body`
    - **Full Type**: `hosting.web.localSeo.location.CountryEnum`
    - **Description**: Country of the location.
  - **name** (body, required): The name of the location.
    - **Type**: `string`
    - **Param Type**: `body`
    - **Full Type**: `string`
    - **Description**: Name of the location.
  - **street** (body, required): The address line 1 of the location.
    - **Type**: `string`
    - **Param Type**: `body`
    - **Full Type**: `string`
    - **Description**: Address line 1 of the location.
  - **zip** (body, required): The zipcode of the location.
    - **Type**: `string`
    - **Param Type**: `body`
    - **Full Type**: `string`
    - **Description**: Zipcode of the location.
- **Response Type**: `hosting.web.localSeo.VisibilityCheckResponse`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/localSeo/visibilityCheck" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY" \
  -d '{
    "country": "FR",
    "name": "Paris Office",
    "street": "123 Main Street",
    "zip": "75001"
  }'
```

---

#### Get Visibility Check Result

- **Path**: `/hosting/web/{serviceName}/localSeo/visibilityCheckResult`
- **HTTP Method**: `GET`
- **Description**: Retrieve the result of a visibility check for a specific directory.
- **Authentication**: Not required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **directory** (query, required): The directory for which to retrieve the result.
    - **Type**: `string`
    - **Param Type**: `query`
    - **Full Type**: `string`
    - **Description**: Get the result only for one directory.
  - **id** (query, required): The ID of the check.
    - **Type**: `long`
    - **Param Type**: `query`
    - **Full Type**: `long`
    - **Description**: Id of the check.
  - **token** (query, required): The token received when requesting the check.
    - **Type**: `string`
    - **Param Type**: `query`
    - **Full Type**: `string`
    - **Description**: Token received when requesting the check.
- **Response Type**: `hosting.web.localSeo.VisibilityCheckResultResponse[]`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/localSeo/visibilityCheckResult?directory=$DIRECTORY&id=$ID&token=$TOKEN" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

### Abuse State

#### Get Abuse State

- **Path**: `/hosting/web/{serviceName}/abuseState`
- **HTTP Method**: `GET`
- **Description**: Retrieve the abuse state for a specific hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
- **Response Type**: `hosting.web.AbuseState`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:abuseState/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/abuseState" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

### Available Configurations

#### List Available Configurations

- **Path**: `/hosting/web/{serviceName}/availableConfigurations`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of configurations available for a specific hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **language** (query, optional): Filter by language.
    - **Type**: `hosting.web.configuration.LanguageEnum`
    - **Param Type**: `query`
    - **Full Type**: `hosting.web.configuration.LanguageEnum`
    - **Description**: Filter on language name.
- **Response Type**: `hosting.web.configuration.VersionEnum[]`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:availableConfigurations/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/availableConfigurations?language=$LANGUAGE" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

### Boost History

#### Get Boost History

- **Path**: `/hosting/web/{serviceName}/boostHistory`
- **HTTP Method**: `GET`
- **Description**: Retrieve the history of boosts for a specific hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **date** (query, optional): Filter by date.
    - **Type**: `datetime`
    - **Param Type**: `query`
    - **Full Type**: `datetime`
    - **Description**: Filter the value of date property (=).
- **Response Type**: `datetime[]`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:boostHistory/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/boostHistory?date=$DATE" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Get Boost History Detail

- **Path**: `/hosting/web/{serviceName}/boostHistory/{date}`
- **HTTP Method**: `GET`
- **Description**: Retrieve detailed boost history for a specific date.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **date** (path, required): The date of the boost.
    - **Type**: `datetime`
    - **Param Type**: `path`
    - **Full Type**: `datetime`
    - **Description**: Date.
- **Response Type**: `hosting.web.BoostHistory`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:boostHistory/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/boostHistory/$DATE" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

### CDN (Content Delivery Network)

#### Get CDN by Service Name

- **Path**: `/hosting/web/{serviceName}/cdn`
- **HTTP Method**: `GET`
- **Description**: Retrieve CDN settings for a specific hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
- **Response Type**: `hosting.web.CDN`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### List Available CDN Options

- **Path**: `/hosting/web/{serviceName}/cdn/availableOptions`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of available CDN options for a specific hosting service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
- **Response Type**: `cdn.availableOptions[]`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/availableOptions/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/availableOptions" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### List All Domains for a CDN Service

- **Path**: `/hosting/web/{serviceName}/cdn/domain`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of all domains for a specific CDN service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
- **Response Type**: `cdn.domain[]`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Get CDN Domain Details

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details for a specific domain on a CDN service.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
- **Response Type**: `cdn.domain`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Generate URL to Logs Archive

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/logs`
- **HTTP Method**: `GET`
- **Description**: Generate a URL to access logs for a specific domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
  - **date** (query, optional): The date for which to retrieve logs.
    - **Type**: `date`
    - **Param Type**: `query`
    - **Full Type**: `date`
    - **Description**: Logs date (default is yesterday).
- **Response Type**: `cdn.logs`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/logs/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/logs" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### List All Options for a Domain

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/option`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of all CDN options for a specific domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
- **Response Type**: `cdn.domain.option[]`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/option/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/option" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Add an Option to a Domain

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/option`
- **HTTP Method**: `POST`
- **Description**: Add a new CDN option to a domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
  - **Request Body** (required): The CDN option to add.
    - **Type**: `cdn.domain.add.option`
    - **Param Type**: `body`
    - **Full Type**: `cdn.domain.add.option`
    - **Description**: Request Body.
- **Response Type**: `cdn.domain.option`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/option/create`
  - **Required**: Yes

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/option" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY" \
  -d '{
    "property1": "value1"
  }'
```

---

#### Get Option Details for a Domain

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/option/{optionName}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details for a specific CDN option on a domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
  - **optionName** (path, required): The option name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Option name.
- **Response Type**: `cdn.domain.option`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/option/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/option/$OPTION_NAME" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Update CDN Option

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/option/{optionName}`
- **HTTP Method**: `PUT`
- **Description**: Update a specific CDN option on a domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
  - **optionName** (path, required): The option name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Option name.
  - **Request Body** (required): The updated CDN option properties.
    - **Type**: `cdn.domain.option`
    - **Param Type**: `body`
    - **Full Type**: `cdn.domain.option`
    - **Description**: Request Body.
- **Response Type**: `cdn.domain.option`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/option/edit`
  - **Required**: Yes

**Example Request**:

```bash
curl -X PUT "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/option/$OPTION_NAME" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY" \
  -d '{
    "property1": "value1"
  }'
```

---

#### Remove or Reset CDN Option

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/option/{optionName}`
- **HTTP Method**: `DELETE`
- **Description**: Remove or reset a CDN option to its default value.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
  - **optionName** (path, required): The option name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Option name.
- **Response Type**: `void`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/option/delete`
  - **Required**: Yes

**Example Request**:

```bash
curl -X DELETE "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/option/$OPTION_NAME" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Flush CDN Cache for a Domain

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/purge`
- **HTTP Method**: `POST`
- **Description**: Flush the CDN cache for a specific domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
  - **pattern** (query, optional): The pattern to purge.
    - **Type**: `string`
    - **Param Type**: `query`
    - **Full Type**: `string`
    - **Description**: Purge pattern.
  - **patternType** (query, optional): The type of pattern.
    - **Type**: `cdn.PurgeTypeEnum`
    - **Param Type**: `query`
    - **Full Type**: `cdn.PurgeTypeEnum`
    - **Description**: Purge Pattern Type (default is regex).
- **Response Type**: `cdn.operation`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/purge`
  - **Required**: Yes

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/purge" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Trigger CDN Refresh for a Domain

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/refresh`
- **HTTP Method**: `POST`
- **Description**: Trigger a refresh operation for a domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Stable production version (`PRODUCTION`)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
- **Response Type**: `cdn.operation`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/refresh`
  - **Required**: Yes

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/refresh" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

#### Get CDN Domain Statistics

- **Path**: `/hosting/web/{serviceName}/cdn/domain/{domainName}/statistics`
- **HTTP Method**: `GET`
- **Description**: Retrieve CDN statistics for a specific domain.
- **Authentication**: Required (`noAuthentication: false`)
- **API Status**: Deprecated (will be removed on 2024-01-01)
- **Parameters**:
  - **serviceName** (path, required): The internal name of your hosting service.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Service name.
  - **domainName** (path, required): The domain name.
    - **Type**: `string`
    - **Param Type**: `path`
    - **Full Type**: `string`
    - **Description**: Domain name.
  - **period** (query, optional): The period for which to retrieve statistics.
    - **Type**: `cdn.DomainStatisticsPeriodEnum`
    - **Param Type**: `query`
    - **Full Type**: `cdn.DomainStatisticsPeriodEnum`
    - **Description**: Period (default is day).
- **Response Type**: `cdn.domain.statistics[]`
- **IAM Actions**:
  - **Name**: `webHosting:apiovh:cdn/domain/statistics/get`
  - **Required**: Yes

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/hosting/web/$SERVICE_NAME/cdn/domain/$DOMAIN_NAME/statistics" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-API-Secret: $APP_SECRET" \
  -H "X-OVH-Application: $APP_KEY" \
  -H "X-OVH-Consumer: $CONSUMER_KEY"
```

---

## Notes

- **API Status**: `PRODUCTION` indicates stable, production-ready APIs. `DEPRECATED` indicates APIs that will be removed in the future.
- **Authentication**: Most endpoints require authentication. Check `noAuthentication` in the operation details.
- **IAM Actions**: These are required permissions for the operations. Ensure your consumer key has the necessary IAM actions enabled.
- **Parameter Types**: Parameters can be passed in the URL path, query string, or request body. Follow the specified `paramType` for each parameter.
- **Response Types**: The structure of the response varies by operation. Refer to the `responseType` for expected output.

---

## Support & Troubleshooting

- If an operation fails, check the error response for details.
- Ensure your authentication credentials are valid and have the necessary permissions.
- Validate input parameters before making API calls.
- For deprecated APIs, migrate to newer alternatives before the removal date.

---

## References

- [OVHcloud Hosting API Documentation](https://api.ovh.com/)
- [OVHcloud API Authentication Guide](https://docs.ovh.com/)
- [IAM Actions Reference](https://docs.ovh.com/)
