# OVHcloud KMS (OKMS) Node Documentation

> **Note**: This documentation is generated from the OKMS API v2 specification (`api_docs/v2/okms.json`). It describes the available operations, parameters, and responses for the OVHcloud Key Management Service (OKMS) as implemented in the n8n node.

---

## Overview

The **OVHcloud Key Management Service (OKMS)** node provides access to the OVHcloud OKMS API, allowing users to manage cryptographic keys, secrets, and related configurations. This node is designed to interact with the OKMS API endpoints for key management, secret management, and logging operations.

---

## Available Operations

### 1. **List Available Regions**

- **Path**: `/okms/reference/regions`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of available regions for OKMS services.
- **Authentication**: Required
- **Parameters**:
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
- **Response Type**: `okms.reference.Region[]`
- **API Status**: Stable production version

---

### 2. **Get Secret Engine Default Configuration**

- **Path**: `/okms/reference/secretConfig`
- **HTTP Method**: `GET`
- **Description**: Retrieve the default configuration for a secret engine in a specified region.
- **Authentication**: Required
- **Parameters**:
  - `region` (okms.RegionEnum, required): OKMS region.
- **Response Type**: `okms.reference.secretConfig.Response`
- **API Status**: Stable production version

---

### 3. **Get Service Key Type, Size, Curve, and Operations Combination**

- **Path**: `/okms/reference/serviceKey`
- **HTTP Method**: `GET`
- **Description**: Retrieve the available combinations of service key types, sizes, curves, and operations.
- **Authentication**: Required
- **Parameters**:
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
- **Response Type**: `okms.reference.serviceKey.Response[]`
- **API Status**: Stable production version

---

### 4. **List OVHcloud KMS Services**

- **Path**: `/okms/resource`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of all OVHcloud KMS services.
- **Authentication**: Required
- **Parameters**:
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
  - `iamTags` (map[string][]iam.resource.TagFilter, optional): Filter resources based on IAM tags.
- **Response Type**: `okms.resource.ResponseWithIAM[]`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:resource/get`

---

### 5. **Get an OVHcloud KMS Service**

- **Path**: `/okms/resource/{okmsId}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details for a specific OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
  - `publicCA` (boolean, optional): Include the KMS public CA (Certificate Authority) in the response.
- **Response Type**: `okms.resource.ResponseWithIAM`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:resource/get`

---

### 6. **List All Access Credentials for an OKMS Service**

- **Path**: `/okms/resource/{okmsId}/credential`
- **HTTP Method**: `GET`
- **Description**: Retrieve all access credentials for a specific OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
- **Response Type**: `okms.credential.GetResponse[]`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:credential/get`
- **Possible Errors**:
  - `Client::BadRequest::CredentialPaginationCursorInvalidValue`

---

### 7. **Request a New Access Credential**

- **Path**: `/okms/resource/{okmsId}/credential`
- **HTTP Method**: `POST`
- **Description**: Create a new access credential for an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `dataType` (okms.credential.Creation, required): Request body containing credential details.
- **Response Type**: `okms.credential.CreationResponse`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:credential/create`
- **Possible Errors**:
  - `Client::BadRequest::CredentialCSRInvalidCharacter`
  - `Client::BadRequest::CredentialCSRMaximumExceeded`
  - `Client::BadRequest::CredentialCertificateTypeIncompatibleFields`
  - `Client::BadRequest::CredentialCertificateTypeInvalidEnum`
  - `Client::BadRequest::CredentialDescriptionInvalidCharacter`
  - `Client::BadRequest::CredentialDescriptionMaximumExceeded`
  - `Client::BadRequest::CredentialIdentityURNsInvalidSize`
  - `Client::BadRequest::CredentialIdentityURNsInvalidURN`
  - `Client::BadRequest::CredentialIdentityURNsMaximumExceeded`
  - `Client::BadRequest::CredentialNameInvalidCharacter`
  - `Client::BadRequest::CredentialNameMaximumExceeded`
  - `Client::BadRequest::CredentialStatusInvalid`
  - `Client::BadRequest::CredentialValidityMaximumExceeded`
  - `Client::BadRequest::CredentialValidityMinimumRequired`

---

### 8. **Revoke and Delete an Access Credential**

- **Path**: `/okms/resource/{okmsId}/credential/{credentialId}`
- **HTTP Method**: `DELETE`
- **Description**: Delete and revoke a specific access credential.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `credentialId` (uuid, required): Unique identifier for the credential to delete.
- **Response Type**: `okms.credential.GetResponse`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:credential/delete`
- **Possible Errors**:
  - `Client::BadRequest::CredentialStatusInvalid`

---

### 9. **Get an Access Credential**

- **Path**: `/okms/resource/{okmsId}/credential/{credentialId}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details for a specific access credential.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `credentialId` (uuid, required): Unique identifier for the credential.
- **Response Type**: `okms.credential.GetResponse`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:credential/get`

---

### 10. **List Available Log Kinds**

- **Path**: `/okms/resource/{okmsId}/log/kind`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of available log kinds for an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
- **Response Type**: `dbaas.logs.LogKind[]`
- **API Status**: Beta version
- **Required IAM Actions**:
  - `okms:apiovh:log/kind/get`

---

### 11. **Get a Log Kind**

- **Path**: `/okms/resource/{okmsId}/log/kind/{name}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details for a specific log kind.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `name` (string, required): Name of the log kind.
- **Response Type**: `dbaas.logs.LogKind`
- **API Status**: Beta version
- **Required IAM Actions**:
  - `okms:apiovh:log/kind/get`

---

### 12. **List Subscription IDs for a Log Cluster**

- **Path**: `/okms/resource/{okmsId}/log/subscription`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of subscription IDs for an OKMS log cluster.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
  - `kind` (string, optional): Filter subscriptions based on a specific log kind (e.g., `audit`).
- **Response Type**: `dbaas.logs.LogSubscription[]`
- **API Status**: Beta version
- **Required IAM Actions**:
  - `okms:apiovh:log/subscription/get`

---

### 13. **Create a Subscription from OKMS Logs to a Pre-existing LDP Stream**

- **Path**: `/okms/resource/{okmsId}/log/subscription`
- **HTTP Method**: `POST`
- **Description**: Create a new subscription to forward logs to an existing LDP (Log Data Platform) stream.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `dataType` (dbaas.logs.LogSubscriptionCreation, required): Request body containing subscription details.
- **Response Type**: `dbaas.logs.LogSubscriptionResponse`
- **API Status**: Beta version
- **Required IAM Actions**:
  - `okms:apiovh:log/subscription/create`
  - `ldp:apiovh:output/graylog/stream/forwardTo` (Required on the targeted LDP service)

---

### 14. **Delete a Subscription**

- **Path**: `/okms/resource/{okmsId}/log/subscription/{subscriptionId}`
- **HTTP Method**: `DELETE`
- **Description**: Delete a specific log subscription.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `subscriptionId` (uuid, required): Unique identifier for the subscription to delete.
- **Response Type**: `dbaas.logs.LogSubscriptionResponse`
- **API Status**: Beta version
- **Required IAM Actions**:
  - `okms:apiovh:log/subscription/delete`

---

### 15. **Get Subscription Details**

- **Path**: `/okms/resource/{okmsId}/log/subscription/{subscriptionId}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details for a specific log subscription.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `subscriptionId` (uuid, required): Unique identifier for the subscription.
- **Response Type**: `dbaas.logs.LogSubscription`
- **API Status**: Beta version
- **Required IAM Actions**:
  - `okms:apiovh:log/subscription/get`

---

### 16. **Generate a Temporary URL to Retrieve Logs**

- **Path**: `/okms/resource/{okmsId}/log/url`
- **HTTP Method**: `POST`
- **Description**: Create a temporary URL for retrieving logs from an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `dataType` (dbaas.logs.LogUrlCreation, required): Request body containing log URL details.
- **Response Type**: `dbaas.logs.TemporaryLogsLink`
- **API Status**: Beta version
- **Required IAM Actions**:
  - `okms:apiovh:log/url/create`

---

### 17. **List All Secrets for an OKMS Service**

- **Path**: `/okms/resource/{okmsId}/secret`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of all secrets stored in an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
  - `iamTags` (map[string][]iam.resource.TagFilter, optional): Filter secrets based on IAM tags.
- **Response Type**: `okms.secret.GetResponseWithIAM[]`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/get`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`

---

### 18. **Create a Secret**

- **Path**: `/okms/resource/{okmsId}/secret`
- **HTTP Method**: `POST`
- **Description**: Create a new secret in an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `dataType` (okms.secret.Creation, required): Request body containing secret details.
- **Response Type**: `okms.secret.PostResponse`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/create`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretCasMaxExceeded`
  - `Client::BadRequest::SecretCasMinRequired`
  - `Client::BadRequest::SecretCustomMetadataKeyInvalidCharacter`
  - `Client::BadRequest::SecretCustomMetadataKeyMaxExceeded`
  - `Client::BadRequest::SecretCustomMetadataKeyMinRequired`
  - `Client::BadRequest::SecretCustomMetadataMaxExceeded`
  - `Client::BadRequest::SecretDataInvalidKeyValueJson`
  - `Client::BadRequest::SecretDataMaxExceeded`
  - `Client::BadRequest::SecretDeactivateVersionAfterInvalidDuration`
  - `Client::BadRequest::SecretMaxVersionsMaxExceeded`
  - `Client::BadRequest::SecretMaxVersionsMinRequired`
  - `Client::BadRequest::SecretPathInvalidCharacter`
  - `Client::BadRequest::SecretPathMaxExceeded`

---

### 19. **Delete a Secret**

- **Path**: `/okms/resource/{okmsId}/secret/{path}`
- **HTTP Method**: `DELETE`
- **Description**: Delete a specific secret and all its versions.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `path` (string, required): Path of the secret to delete.
- **Response Type**: `void`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/delete`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretPathInvalidCharacter`
  - `Client::BadRequest::SecretPathMaxExceeded`

---

### 20. **Retrieve a Secret**

- **Path**: `/okms/resource/{okmsId}/secret/{path}`
- **HTTP Method**: `GET`
- **Description**: Retrieve a specific secret from an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `path` (string, required): Path of the secret to retrieve.
  - `includeData` (boolean, optional): Include secret data in the response.
  - `version` (long, optional): Version of the secret to retrieve. If not specified, the latest version is returned.
- **Response Type**: `okms.secret.GetResponseWithIAM`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/get`
  - `okms:apiovh:secret/version/getData` (Optional, required if `includeData=true`)
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretPathInvalidCharacter`
  - `Client::BadRequest::SecretPathMaxExceeded`
  - `Client::BadRequest::SecretVersionMaxExceeded`
  - `Client::BadRequest::SecretVersionMinRequired`

---

### 21. **Update a Secret**

- **Path**: `/okms/resource/{okmsId}/secret/{path}`
- **HTTP Method**: `PUT`
- **Description**: Update a specific secret in an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `path` (string, required): Path of the secret to update.
  - `cas` (long, optional): Current secret version number. If specified, the current version is verified before updating.
  - `dataType` (okms.secret.UpdateRequest, required): Request body containing updated secret details.
- **Response Type**: `okms.secret.PostResponse`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/edit`
  - `okms:apiovh:secret/version/create` (Optional, required if updating secret data)
  - `okms:apiovh:secret/updateMetadata` (Optional, required if updating metadata)
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretCasMaxExceeded`
  - `Client::BadRequest::SecretCasMinRequired`
  - `Client::BadRequest::SecretCustomMetadataKeyInvalidCharacter`
  - `Client::BadRequest::SecretCustomMetadataKeyMaxExceeded`
  - `Client::BadRequest::SecretCustomMetadataKeyMinRequired`
  - `Client::BadRequest::SecretCustomMetadataMaxExceeded`
  - `Client::BadRequest::SecretDataInvalidKeyValueJson`
  - `Client::BadRequest::SecretDataMaxExceeded`
  - `Client::BadRequest::SecretDeactivateVersionAfterInvalidDuration`
  - `Client::BadRequest::SecretFieldRequired`
  - `Client::BadRequest::SecretMaxVersionsMaxExceeded`
  - `Client::BadRequest::SecretMaxVersionsMinRequired`
  - `Client::BadRequest::SecretPathInvalidCharacter`
  - `Client::BadRequest::SecretPathMaxExceeded`

---

### 22. **List Secret Versions**

- **Path**: `/okms/resource/{okmsId}/secret/{path}/version`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of all versions for a specific secret.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `path` (string, required): Path of the secret.
- **Response Type**: `okms.secret.Version[]`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/get`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretPathInvalidCharacter`
  - `Client::BadRequest::SecretPathMaxExceeded`

---

### 23. **Retrieve a Secret Version**

- **Path**: `/okms/resource/{okmsId}/secret/{path}/version/{version}`
- **HTTP Method**: `GET`
- **Description**: Retrieve a specific version of a secret.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `path` (string, required): Path of the secret.
  - `version` (long, required): Version number to retrieve.
  - `includeData` (boolean, optional): Include secret data in the response.
- **Response Type**: `okms.secret.Version`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/get`
  - `okms:apiovh:secret/version/getData` (Optional, required if `includeData=true`)
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretPathInvalidCharacter`
  - `Client::BadRequest::SecretPathMaxExceeded`
  - `Client::BadRequest::SecretVersionMaxExceeded`
  - `Client::BadRequest::SecretVersionMinRequired`

---

### 24. **Create a Secret Version**

- **Path**: `/okms/resource/{okmsId}/secret/{path}/version`
- **HTTP Method**: `POST`
- **Description**: Create a new version of a secret.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `path` (string, required): Path of the secret.
  - `cas` (long, optional): Current secret version number. If specified, the current version is verified before creating a new version.
  - `dataType` (okms.secret.version.Creation, required): Request body containing new secret version details.
- **Response Type**: `okms.secret.Version`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/version/create`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretCasMaxExceeded`
  - `Client::BadRequest::SecretCasMinRequired`
  - `Client::BadRequest::SecretDataInvalidKeyValueJson`
  - `Client::BadRequest::SecretDataMaxExceeded`
  - `Client::BadRequest::SecretPathInvalidCharacter`
  - `Client::BadRequest::SecretPathMaxExceeded`

---

### 25. **Update Secret Version State**

- **Path**: `/okms/resource/{okmsId}/secret/{path}/version/{version}`
- **HTTP Method**: `PUT`
- **Description**: Update the state of a specific secret version (e.g., activate, deactivate, delete).
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `path` (string, required): Path of the secret.
  - `version` (long, required): Version number to update.
  - `dataType` (okms.secret.version.UpdateRequest, required): Request body containing state update details.
- **Response Type**: `okms.secret.version.UpdateResponse`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secret/version/edit`
  - `okms:apiovh:secret/version/delete` (Optional, required if deleting)
  - `okms:apiovh:secret/version/activate` (Optional, required if activating)
  - `okms:apiovh:secret/version/deactivate` (Optional, required if deactivating)
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretPathInvalidCharacter`
  - `Client::BadRequest::SecretPathMaxExceeded`
  - `Client::BadRequest::SecretVersionMaxExceeded`
  - `Client::BadRequest::SecretVersionMinRequired`

---

### 26. **Retrieve Secrets Configuration**

- **Path**: `/okms/resource/{okmsId}/secretConfig`
- **HTTP Method**: `GET`
- **Description**: Retrieve the configuration of secrets for an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
- **Response Type**: `okms.secretConfig.Response`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secretConfig/get`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`

---

### 27. **Update Secrets Configuration**

- **Path**: `/okms/resource/{okmsId}/secretConfig`
- **HTTP Method**: `PUT`
- **Description**: Update the configuration of secrets for an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `dataType` (okms.secretConfig.UpdateRequest, required): Request body containing updated configuration details.
- **Response Type**: `okms.secretConfig.Response`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:secretConfig/update`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::SecretDeactivateVersionAfterInvalidDuration`
  - `Client::BadRequest::SecretFieldRequired`
  - `Client::BadRequest::SecretMaxVersionsMaxExceeded`
  - `Client::BadRequest::SecretMaxVersionsMinRequired`

---

### 28. **List All Service Keys for an OKMS Service**

- **Path**: `/okms/resource/{okmsId}/serviceKey`
- **HTTP Method**: `GET`
- **Description**: Retrieve a list of all service keys stored in an OKMS service.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `X-Pagination-Cursor` (string, optional): Pagination cursor.
  - `X-Pagination-Size` (long, optional): Pagination size.
  - `iamTags` (map[string][]iam.resource.TagFilter, optional): Filter service keys based on IAM tags.
- **Response Type**: `okms.serviceKey.ResponseWithIAM[]`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:serviceKey/get`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`

---

### 29. **Create or Import a Service Key**

- **Path**: `/okms/resource/{okmsId}/serviceKey`
- **HTTP Method**: `POST`
- **Description**: Create a new service key or import an existing one.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `dataType` (okms.serviceKey.Creation, required): Request body containing service key details.
- **Response Type**: `okms.serviceKey.Response`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:serviceKey/create`
  - `okms:apiovh:serviceKey/import` (Optional, required if importing)
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::ServiceKeyContextInvalidCharacter`
  - `Client::BadRequest::ServiceKeyContextMaxExceeded`
  - `Client::BadRequest::ServiceKeyCrvRequired`
  - `Client::BadRequest::ServiceKeyCurveIncompatible`
  - `Client::BadRequest::ServiceKeyCurveRequired`
  - `Client::BadRequest::ServiceKeyDInvalidFormat`
  - `Client::BadRequest::ServiceKeyDRequired`
  - `Client::BadRequest::ServiceKeyDpRequired`
  - `Client::BadRequest::ServiceKeyDqRequired`
  - `Client::BadRequest::ServiceKeyEInvalidFormat`
  - `Client::BadRequest::ServiceKeyERequired`
  - `Client::BadRequest::ServiceKeyKInvalidFormat`
  - `Client::BadRequest::ServiceKeyKRequired`
  - `Client::BadRequest::ServiceKeyKeyOpsInvalidUsage`
  - `Client::BadRequest::ServiceKeyKeyOpsRequired`
  - `Client::BadRequest::ServiceKeyKeysIncompatible`
  - `Client::BadRequest::ServiceKeyKeysMaxExceeded`
  - `Client::BadRequest::ServiceKeyKeysMinRequired`
  - `Client::BadRequest::ServiceKeyKidRequired`
  - `Client::BadRequest::ServiceKeyKtyRequired`
  - `Client::BadRequest::ServiceKeyNInvalidFormat`
  - `Client::BadRequest::ServiceKeyNInvalidSize`
  - `Client::BadRequest::ServiceKeyNRequired`
  - `Client::BadRequest::ServiceKeyNameInvalidCharacter`
  - `Client::BadRequest::ServiceKeyNameMaxExceeded`
  - `Client::BadRequest::ServiceKeyNameMinRequired`
  - `Client::BadRequest::ServiceKeyOperationsIncompatible`
  - `Client::BadRequest::ServiceKeyOperationsInvalid`
  - `Client::BadRequest::ServiceKeyOperationsRequired`
  - `Client::BadRequest::ServiceKeyPInvalidFormat`
  - `Client::BadRequest::ServiceKeyPRequired`
  - `Client::BadRequest::ServiceKeyQInvalidFormat`
  - `Client::BadRequest::ServiceKeyQRequired`
  - `Client::BadRequest::ServiceKeyQiRequired`
  - `Client::BadRequest::ServiceKeySizeIncompatible`
  - `Client::BadRequest::ServiceKeySizeInvalid`
  - `Client::BadRequest::ServiceKeySizeRequired`
  - `Client::BadRequest::ServiceKeyTypeIncompatible`
  - `Client::BadRequest::ServiceKeyTypeRequired`
  - `Client::BadRequest::ServiceKeyXInvalidFormat`
  - `Client::BadRequest::ServiceKeyXRequired`
  - `Client::BadRequest::ServiceKeyYInvalidFormat`
  - `Client::BadRequest::ServiceKeyYRequired`

---

### 30. **Delete a Service Key**

- **Path**: `/okms/resource/{okmsId}/serviceKey/{keyId}`
- **HTTP Method**: `DELETE`
- **Description**: Delete a specific service key.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `keyId` (uuid, required): Unique identifier for the service key to delete.
- **Response Type**: `void`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:serviceKey/delete`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`

---

### 31. **Retrieve a Service Key**

- **Path**: `/okms/resource/{okmsId}/serviceKey/{keyId}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details for a specific service key.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `keyId` (uuid, required): Unique identifier for the service key.
  - `format` (okms.KeyFormatEnum, optional): Optional additional output format of the key.
- **Response Type**: `okms.serviceKey.ResponseWithIAM`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:serviceKey/get`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`

---

### 32. **Update a Service Key**

- **Path**: `/okms/resource/{okmsId}/serviceKey/{keyId}`
- **HTTP Method**: `PUT`
- **Description**: Update a specific service key.
- **Authentication**: Required
- **Parameters**:
  - `okmsId` (uuid, required): Unique identifier for the OKMS service.
  - `keyId` (uuid, required): Unique identifier for the service key.
  - `dataType` (okms.serviceKey.Update, required): Request body containing updated service key details.
- **Response Type**: `okms.serviceKey.Response`
- **API Status**: Stable production version
- **Required IAM Actions**:
  - `okms:apiovh:serviceKey/update`
- **Possible Errors**:
  - `Client::BadRequest::OKMSExpired`
  - `Client::BadRequest::ServiceKeyDeactivationReasonIncompatible`
  - `Client::BadRequest::ServiceKeyDeactivationReasonIncompatibleReason`
  - `Client::BadRequest::ServiceKeyDeactivationReasonRequired`
  - `Client::BadRequest::ServiceKeyNameInvalidCharacter`
  - `Client::BadRequest::ServiceKeyNameMaxExceeded`
  - `Client::BadRequest::ServiceKeyNameMinRequired`

---

## Authentication

All operations require authentication via the **OVH API** credential type. The credential must provide the following fields:

- `host` (string): The OVH API host.
- `applicationKey` (string): The application key.
- `applicationSecret` (string): The application secret.
- `consumerKey` (string): The consumer key.

---

## Error Handling

The node follows the error handling patterns defined in the OKMS API specification. Errors are returned as `NodeApiError` with meaningful messages and context. Common error scenarios include:

- Invalid authentication credentials.
- Expired OKMS service.
- Invalid parameter values (e.g., `Client::BadRequest::SecretPathInvalidCharacter`).
- Missing required fields (e.g., `Client::BadRequest::SecretFieldRequired`).

---

## IAM Actions

Some operations require specific IAM actions for authorization. These actions are documented alongside each operation. Ensure your OVHcloud IAM policy includes the necessary actions before using these endpoints.

---

## Pagination

Many operations support pagination via the following parameters:

- `X-Pagination-Cursor` (string, optional): Cursor for pagination.
- `X-Pagination-Size` (long, optional): Size of each page.

---

## Response Types

The node uses TypeScript types for responses, ensuring strict type safety. Common response types include:

- `okms.reference.Region[]`: List of regions.
- `okms.resource.ResponseWithIAM[]`: List of OKMS services with IAM details.
- `okms.credential.GetResponse[]`: List of access credentials.
- `okms.secret.GetResponseWithIAM[]`: List of secrets with IAM details.
- `okms.serviceKey.ResponseWithIAM[]`: List of service keys with IAM details.

---

## Notes

- **Beta Operations**: Some operations are marked as beta and may change or be deprecated in future versions.
- **IAM Tags**: Filtering by IAM tags is supported in some operations.
- **Temporary Log URLs**: Useful for retrieving logs without long-term storage.
- **Secret Versions**: Secrets can have multiple versions, each with its own state.

---

## References

- [OVHcloud OKMS API Documentation](https://api.ovh.com/)
- [n8n Node Development Guidelines](https://github.com/ovh/n8n-nodes-ovhcloud/blob/main/AGENTS.md)
- [TypeScript Strict Mode](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [IAM Actions and Tags](https://docs.ovh.com/fr/api/iam/)
