# OVHcloud Notification Node Documentation (API v2)

## Overview

This documentation describes the **n8n-nodes-ovhcloud** Node for OVHcloud's Notification API (v2). The node allows you to interact with OVHcloud's Notification API endpoints, enabling operations like managing contact means, routings, and notifications.

---

## Node Properties

The node properties are structured to match OVHcloud's API v2 endpoints. Each property corresponds to an operation or parameter supported by the API.

---

### Credential Authentication

The node uses the **OVH API** credential type for authentication. Ensure you have configured your OVHcloud credentials in the **n8n** instance before using this node.

---

### Base URL

All operations are performed against the following base URL:

```
https://eu.api.ovh.com/v2
```

---

## Operations

### 1. List All Contact Means

**Path:** `/notification/contactMean/get`

**HTTP Method:** `GET`

**Description:** Retrieve every contact mean.

**Parameters:**

| Name                | Data Type | Param Type | Required | Description       |
| ------------------- | --------- | ---------- | -------- | ----------------- |
| X-Pagination-Cursor | string    | header     | No       | Pagination cursor |
| X-Pagination-Size   | long      | header     | No       | Pagination size   |

**Response Type:** `notification.contactMean.ContactMean[]`

**IAM Actions:**

- `account:apiovh:notification/contactMean/get` (required: true)

**Errors:**

- `Client::BadRequest::CursorParametersConflict`
- `Client::BadRequest::InvalidCursor`

---

### 2. Create a Contact Mean

**Path:** `/notification/contactMean`

**HTTP Method:** `POST`

**Description:** Create a contact mean.

**Parameters:**

| Name        | Data Type                           | Param Type | Required | Description                                             |
| ----------- | ----------------------------------- | ---------- | -------- | ------------------------------------------------------- |
| description | string                              | body       | No       | Arbitrary description for this contact mean             |
| email       | string                              | body       | Yes      | When type is EMAIL, the email address that will be used |
| type        | `notification.contactMean.TypeEnum` | body       | Yes      | Type of the contact mean to create (e.g., `EMAIL`)      |

**Request Body Example:**

```json
{
    "type": "EMAIL",
    "email": "user@example.com",
    "description": "Primary email contact"
}
```

**Response Type:** `notification.contactMean.ContactMean`

**IAM Actions:**

- `account:apiovh:notification/contactMean/create` (required: true)

**Errors:**

- `Client::BadRequest::ContactMeanAlreadyExists`
- `Client::BadRequest::ContactMeanCreationMissingDestination`
- `Client::BadRequest::ContactMeanInvalidDescription`
- `Client::BadRequest::ContactMeanValidationThresholdReached`
- `Client::BadRequest::InvalidEmailAddress`

---

### 3. Delete a Contact Mean

**Path:** `/notification/contactMean/{contactMeanId}`

**HTTP Method:** `DELETE`

**Description:** Delete the contact mean.

**Parameters:**

| Name          | Data Type | Param Type | Required | Description     |
| ------------- | --------- | ---------- | -------- | --------------- |
| contactMeanId | uuid      | path       | Yes      | Contact mean ID |

**Response Type:** `void`

**IAM Actions:**

- `account:apiovh:notification/contactMean/delete` (required: true)

**Errors:**

- `Client::BadRequest::ContactMeanDefaultRO`
- `Client::NotFound::ContactMeanNotFound`

---

### 4. Retrieve Information About a Contact Mean

**Path:** `/notification/contactMean/{contactMeanId}`

**HTTP Method:** `GET`

**Description:** Retrieve information about a contact mean.

**Parameters:**

| Name          | Data Type | Param Type | Required | Description     |
| ------------- | --------- | ---------- | -------- | --------------- |
| contactMeanId | uuid      | path       | Yes      | Contact mean ID |

**Response Type:** `notification.contactMean.ContactMean`

**IAM Actions:**

- `account:apiovh:notification/contactMean/get` (required: true)

**Errors:**

- `Client::NotFound::ContactMeanNotFound`

---

### 5. Update a Contact Mean

**Path:** `/notification/contactMean/{contactMeanId}`

**HTTP Method:** `PUT`

**Description:** Update a contact mean.

**Parameters:**

| Name          | Data Type | Param Type | Required | Description                                 |
| ------------- | --------- | ---------- | -------- | ------------------------------------------- |
| description   | string    | body       | No       | Arbitrary description for this contact mean |
| contactMeanId | uuid      | path       | Yes      | Contact mean ID                             |

**Request Body Example:**

```json
{
    "description": "Updated description",
    "email": "user@example.com"
}
```

**Response Type:** `notification.contactMean.ContactMean`

**IAM Actions:**

- `account:apiovh:notification/contactMean/edit` (required: true)

**Errors:**

- `Client::BadRequest::ContactMeanDefaultRO`
- `Client::BadRequest::ContactMeanInvalidDescription`
- `Client::BadRequest::ContactMeanStatusChangeForbidden`
- `Client::NotFound::ContactMeanNotFound`

---

### 6. Restart Validation for a Contact Mean

**Path:** `/notification/contactMean/{contactMeanId}/restartValidation`

**HTTP Method:** `POST`

**Description:** Restart the validation process for this contact mean if you did not receive the OTP.

**Parameters:**

| Name          | Data Type                           | Param Type | Required | Description                                        |
| ------------- | ----------------------------------- | ---------- | -------- | -------------------------------------------------- |
| description   | string                              | body       | No       | Arbitrary description for this contact mean        |
| contactMeanId | uuid                                | path       | Yes      | Contact mean ID                                    |
| type          | `notification.contactMean.TypeEnum` | body       | Yes      | Type of the contact mean to create (e.g., `EMAIL`) |

**Request Body Example:**

```json
{
    "otp": "123456"
}
```

**Response Type:** `notification.contactMean.ContactMean`

**IAM Actions:**

- `account:apiovh:notification/contactMean/restartValidation` (required: true)

**Errors:**

- `Client::BadRequest::ContactMeanDefaultRO`
- `Client::BadRequest::ContactMeanInvalidStatus`
- `Client::BadRequest::ContactMeanValidationThresholdReached`
- `Client::BadRequest::ContactMeanWaitBetweenValidations`
- `Client::NotFound::ContactMeanNotFound`

---

### 7. Get List of Tasks on a Contact Mean

**Path:** `/notification/contactMean/{contactMeanId}/task/get`

**HTTP Method:** `GET`

**Description:** Get the list of tasks on a contact mean.

**Parameters:**

| Name                | Data Type | Param Type | Required | Description       |
| ------------------- | --------- | ---------- | -------- | ----------------- |
| X-Pagination-Cursor | string    | header     | No       | Pagination cursor |
| X-Pagination-Size   | long      | header     | No       | Pagination size   |
| contactMeanId       | uuid      | path       | Yes      | Contact mean ID   |

**Response Type:** `common.Task[]`

**IAM Actions:**

- `account:apiovh:notification/contactMean/task/get` (required: true)

**Errors:**

- `Client::BadRequest::CursorParametersConflict`
- `Client::BadRequest::InvalidCursor`
- `Client::NotFound::ContactMeanNotFound`

---

### 8. Get a Task on a Contact Mean

**Path:** `/notification/contactMean/{contactMeanId}/task/{taskId}`

**HTTP Method:** `GET`

**Description:** Get a task on a contact mean.

**Parameters:**

| Name          | Data Type | Param Type | Required | Description     |
| ------------- | --------- | ---------- | -------- | --------------- |
| contactMeanId | uuid      | path       | Yes      | Contact mean ID |
| taskId        | uuid      | path       | Yes      | Task ID         |

**Response Type:** `common.Task`

**IAM Actions:**

- `account:apiovh:notification/contactMean/task/get` (required: true)

**Errors:**

- `Client::NotFound::ContactMeanNotFound`
- `Client::NotFound::ContactMeanTaskNotFound`

---

### 9. Update a Task on a Contact Mean

**Path:** `/notification/contactMean/{contactMeanId}/task/{taskId}`

**HTTP Method:** `PUT`

**Description:** Update a task on a contact mean.

**Parameters:**

| Name          | Data Type                             | Param Type | Required | Description                                                               |
| ------------- | ------------------------------------- | ---------- | -------- | ------------------------------------------------------------------------- |
| contactMeanId | uuid                                  | path       | Yes      | Contact mean ID                                                           |
| taskId        | uuid                                  | path       | Yes      | Task ID                                                                   |
| inputs        | `notification.contactMean.TaskInputs` | body       | Yes      | User inputs needed to unlock the task when status is `WAITING_USER_INPUT` |

**Request Body Example:**

```json
{
    "otp": "123456"
}
```

**Response Type:** `common.Task`

**IAM Actions:**

- `account:apiovh:notification/contactMean/task/edit` (required: true)

**Errors:**

- `Client::BadRequest::ContactMeanValidationExpired`
- `Client::BadRequest::ContactMeanValidationFailed`
- `Client::BadRequest::ContactMeanValidationThresholdReached`
- `Client::BadRequest::ContactMeanWaitBetweenValidations`
- `Client::BadRequest::InvalidResendOTP`
- `Client::BadRequest::MissingInput`
- `Client::NotFound::ContactMeanNotFound`
- `Client::NotFound::ContactMeanTaskNotFound`

---

### 10. Validate a Contact Mean

**Path:** `/notification/contactMean/{contactMeanId}/validate`

**HTTP Method:** `POST`

**Description:** Validate this contact mean.

**Parameters:**

| Name          | Data Type | Param Type | Required | Description                                          |
| ------------- | --------- | ---------- | -------- | ---------------------------------------------------- |
| otp           | string    | body       | Yes      | The OTP received by your contact mean to validate it |
| contactMeanId | uuid      | path       | Yes      | Contact mean ID                                      |

**Request Body Example:**

```json
{
    "otp": "123456"
}
```

**Response Type:** `notification.contactMean.ContactMean`

**IAM Actions:**

- `account:apiovh:notification/contactMean/validate` (required: true)

**Errors:**

- `Client::BadRequest::ContactMeanDefaultRO`
- `Client::BadRequest::ContactMeanInvalidStatus`
- `Client::BadRequest::ContactMeanValidationExpired`
- `Client::BadRequest::ContactMeanValidationFailed`
- `Client::NotFound::ContactMeanNotFound`

---

### 11. List All Notifications

**Path:** `/notification/history`

**HTTP Method:** `GET`

**Description:** Retrieve every notification sent to you.

**Parameters:**

| Name                | Data Type                                         | Param Type | Required | Description                                               |
| ------------------- | ------------------------------------------------- | ---------- | -------- | --------------------------------------------------------- |
| X-Pagination-Cursor | string                                            | header     | No       | Pagination cursor                                         |
| X-Pagination-Size   | long                                              | header     | No       | Pagination size                                           |
| category            | string[]                                          | query      | No       | Select notifications belonging to one of these categories |
| createdAfter        | datetime                                          | query      | No       | Select notifications created after this date              |
| createdBefore       | datetime                                          | query      | No       | Select notifications created before this date             |
| priority            | `notification.history.NotificationPriorityEnum[]` | query      | No       | Select notifications matching one of these priorities     |
| sortCreatedAt       | `notification.SortOrderEnum`                      | query      | No       | Sort by createdAt field (default DESC)                    |
| titleContains       | string                                            | query      | No       | Select notifications which title contains this text       |

**Response Type:** `notification.history.Notification[]`

**IAM Actions:**

- `account:apiovh:notification/history/get` (required: true)

**Errors:**

- `Client::BadRequest::CursorParametersConflict`
- `Client::BadRequest::InvalidCursor`

---

### 12. Retrieve Information About a Notification

**Path:** `/notification/history/{notificationId}`

**HTTP Method:** `GET`

**Description:** Retrieve information about a notification sent to you.

**Parameters:**

| Name           | Data Type | Param Type | Required | Description     |
| -------------- | --------- | ---------- | -------- | --------------- |
| notificationId | uuid      | path       | Yes      | Notification ID |

**Response Type:** `notification.history.Notification`

**IAM Actions:**

- `account:apiovh:notification/history/get` (required: true)

**Errors:**

- `Client::NotFound::NotificationNotFound`

---

### 13. Get a Notification Attachment

**Path:** `/notification/history/{notificationId}/attachment/{attachmentName}`

**HTTP Method:** `GET`

**Description:** Get a notification attachment.

**Parameters:**

| Name           | Data Type | Param Type | Required | Description     |
| -------------- | --------- | ---------- | -------- | --------------- |
| attachmentName | string    | path       | Yes      | Attachment name |
| notificationId | uuid      | path       | Yes      | Notification ID |

**Response Type:** `notification.history.Attachment`

**IAM Actions:**

- `account:apiovh:notification/history/attachment/get` (required: true)

**Errors:**

- `Client::NotFound::AttachmentNotFound`

---

### 14. Get Notification Reference Data

**Path:** `/notification/reference`

**HTTP Method:** `GET`

**Description:** Retrieve data referential for /notification endpoints.

**Parameters:** None

**Response Type:** `notification.reference.Reference`

**IAM Actions:** None

---

### 15. List All Routings

**Path:** `/notification/routing`

**HTTP Method:** `GET`

**Description:** Retrieve every routing.

**Parameters:**

| Name                | Data Type | Param Type | Required | Description       |
| ------------------- | --------- | ---------- | -------- | ----------------- |
| X-Pagination-Cursor | string    | header     | No       | Pagination cursor |
| X-Pagination-Size   | long      | header     | No       | Pagination size   |

**Response Type:** `notification.routing.Routing[]`

**IAM Actions:**

- `account:apiovh:notification/routing/get` (required: true)

**Errors:**

- `Client::BadRequest::CursorParametersConflict`
- `Client::BadRequest::InvalidCursor`

---

### 16. Create a Routing

**Path:** `/notification/routing`

**HTTP Method:** `POST`

**Description:** Create a routing.

**Parameters:**

| Name   | Data Type                     | Param Type | Required | Description                              |
| ------ | ----------------------------- | ---------- | -------- | ---------------------------------------- |
| active | boolean                       | body       | Yes      | Whether this routing is currently active |
| name   | string                        | body       | Yes      | Name of the routing                      |
| rules  | `notification.routing.Rule[]` | body       | Yes      | Rules for the routing                    |

**Request Body Example:**

```json
{
    "name": "High Priority Routing",
    "active": true,
    "rules": [
        {
            "condition": "priority=HIGH",
            "contactMeans": ["email:primary"]
        }
    ]
}
```

**Response Type:** `notification.routing.Routing`

**IAM Actions:**

- `account:apiovh:notification/routing/create` (required: true)

**Errors:**

- `Client::BadRequest::InvalidEmailAddress`
- `Client::BadRequest::RoutingAlreadyExists`

---

### 17. Delete a Routing

**Path:** `/notification/routing/{routingId}`

**HTTP Method:** `DELETE`

**Description:** Delete the routing.

**Parameters:**

| Name      | Data Type | Param Type | Required | Description |
| --------- | --------- | ---------- | -------- | ----------- |
| routingId | uuid      | path       | Yes      | Routing ID  |

**Response Type:** `void`

**IAM Actions:**

- `account:apiovh:notification/routing/delete` (required: true)

**Errors:**

- `Client::NotFound::RoutingNotFound`

---

### 18. Retrieve Information About a Routing

**Path:** `/notification/routing/{routingId}`

**HTTP Method:** `GET`

**Description:** Retrieve information about a routing.

**Parameters:**

| Name      | Data Type | Param Type | Required | Description |
| --------- | --------- | ---------- | -------- | ----------- |
| routingId | uuid      | path       | Yes      | Routing ID  |

**Response Type:** `notification.routing.Routing`

**IAM Actions:**

- `account:apiovh:notification/routing/get` (required: true)

**Errors:**

- `Client::NotFound::RoutingNotFound`

---

### 19. Update a Routing

**Path:** `/notification/routing/{routingId}`

**HTTP Method:** `PUT`

**Description:** Update a routing.

**Parameters:**

| Name      | Data Type                     | Param Type | Required | Description                              |
| --------- | ----------------------------- | ---------- | -------- | ---------------------------------------- |
| routingId | uuid                          | path       | Yes      | Routing ID                               |
| active    | boolean                       | body       | No       | Whether this routing is currently active |
| name      | string                        | body       | No       | Name of the routing                      |
| rules     | `notification.routing.Rule[]` | body       | No       | Rules for the routing                    |

**Request Body Example:**

```json
{
    "name": "Updated Routing Name",
    "active": false,
    "rules": [
        {
            "condition": "priority=LOW",
            "contactMeans": ["email:secondary"]
        }
    ]
}
```

**Response Type:** `notification.routing.Routing`

**IAM Actions:**

- `account:apiovh:notification/routing/edit` (required: true)

**Errors:**

- `Client::NotFound::RoutingNotFound`

---

## Data Models

### `common.Task`

Asynchronous operation.

**Properties:**

| Name       | Data Type               | Can Be Null | Read Only | Description                                  |
| ---------- | ----------------------- | ----------- | --------- | -------------------------------------------- |
| createdAt  | datetime                | No          | Yes       | Creation date of the task                    |
| errors     | `common.TaskError[]`    | No          | Yes       | Errors that occurred on the task             |
| finishedAt | datetime                | No          | Yes       | Ending date of the task                      |
| id         | uuid                    | No          | Yes       | Identifier of the task                       |
| link       | string                  | No          | Yes       | Link to the related resource                 |
| message    | string                  | No          | Yes       | Description of the task                      |
| progress   | `common.TaskProgress[]` | No          | Yes       | Progress steps of the asynchronous operation |
| startedAt  | datetime                | No          | Yes       | Starting date of the task                    |
| status     | `common.TaskStatusEnum` | No          | Yes       | Current global status of the task            |
| type       | string                  | No          | Yes       | Type of the task                             |
| updatedAt  | datetime                | No          | Yes       | Last update of the task                      |

---

### `common.TaskError`

Errors that occurred on the task.

**Properties:**

| Name    | Data Type | Can Be Null | Read Only | Description       |
| ------- | --------- | ----------- | --------- | ----------------- |
| message | string    | No          | No        | Error description |

---

### `common.TaskProgress`

Detailed information about an asynchronous operation progress steps.

**Properties:**

| Name   | Data Type               | Can Be Null | Read Only | Description                         |
| ------ | ----------------------- | ----------- | --------- | ----------------------------------- |
| name   | string                  | No          | No        | Progress step name                  |
| status | `common.TaskStatusEnum` | No          | No        | Current status of the progress step |

---

### `common.TaskStatusEnum`

Current status of a task.

**Enum:**

- `DONE`
- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

### `notification.contactMean.ContactMean`

A contact mean.

**Properties:**

| Name         | Data Type                             | Can Be Null | Read Only | Description                                                  |
| ------------ | ------------------------------------- | ----------- | --------- | ------------------------------------------------------------ |
| createdAt    | datetime                              | No          | Yes       | Date at which the contact mean was created                   |
| currentTasks | `common.CurrentTask[]`                | No          | Yes       | Task to do on this contact mean                              |
| default      | boolean                               | No          | Yes       | Is this the default contact mean                             |
| description  | string                                | No          | No        | Arbitrary description for this contact mean                  |
| email        | string                                | No          | No        | When type is EMAIL, the email address this contact mean uses |
| error        | string                                | No          | No        | When status is ERROR, details about the error                |
| id           | uuid                                  | No          | Yes       | ID of the contact mean                                       |
| status       | `notification.contactMean.StatusEnum` | No          | No        | Status of the contact mean                                   |
| type         | `notification.contactMean.TypeEnum`   | No          | Yes       | Type of the contact mean                                     |

---

### `notification.contactMean.StatusEnum`

Status of a contact mean.

**Enum:**

- `DISABLED`
- `ERROR`
- `TO_VALIDATE`
- `VALID`

---

### `notification.contactMean.TypeEnum`

Type of a contact mean.

**Enum:**

- `EMAIL`

---

### `notification.contactMean.TaskInputs`

Contact mean task input.

**Properties:**

| Name      | Data Type | Can Be Null | Read Only | Description                                                                    |
| --------- | --------- | ----------- | --------- | ------------------------------------------------------------------------------ |
| otp       | string    | No          | No        | The OTP received by your contact mean to validate it                           |
| resendOTP | datetime  | No          | No        | Specify a new date in order to request a new OTP (for terraform compatibility) |

---

### `notification.history.Notification`

Notification sent to this account.

**Properties:**

| Name        | Data Type                                       | Can Be Null | Read Only | Description                                 |
| ----------- | ----------------------------------------------- | ----------- | --------- | ------------------------------------------- |
| attachments | `notification.history.Attachment[]`             | No          | Yes       | Attachments linked to this notification     |
| categories  | string[]                                        | No          | Yes       | Categories of the notification              |
| contacts    | `notification.history.Contact[]`                | No          | Yes       | Contact attempts made for this notification |
| createdAt   | datetime                                        | No          | Yes       | Date at which the notification was sent     |
| html        | string                                          | No          | Yes       | HTML text of the notification               |
| id          | uuid                                            | No          | Yes       | ID of the notification                      |
| priority    | `notification.history.NotificationPriorityEnum` | No          | Yes       | Priority of the notification                |
| text        | string                                          | No          | Yes       | Raw text of the notification                |
| title       | string                                          | No          | Yes       | Title of the notification                   |

---

### `notification.history.Contact`

Contact attempt made for a notification.

**Properties:**

| Name   | Data Type                                      | Can Be Null | Read Only | Description                                    |
| ------ | ---------------------------------------------- | ----------- | --------- | ---------------------------------------------- |
| error  | string                                         | No          | Yes       | Error encountered when attempting this contact |
| id     | uuid                                           | No          | Yes       | ID of the contact                              |
| sentAt | datetime                                       | No          | Yes       | Date at which this contact happened            |
| status | `notification.history.ContactStatusEnum`       | No          | Yes       | Status of the contact                          |
| to     | string                                         | No          | Yes       | Destination of this contact attempt            |
| type   | `notification.contactMean.ContactMeanTypeEnum` | No          | Yes       | Type of the contact mean used                  |

---

### `notification.history.ContactStatusEnum`

Status of a notification contact attempt.

**Enum:**

- `BOUNCED`
- `DELIVERED`
- `DROPPED`
- `QUEUED`
- `SENT`

---

### `notification.history.NotificationPriorityEnum`

Priority of a notification.

**Enum:**

- `HIGH`
- `LOW`
- `MEDIUM`

---

### `notification.history.Attachment`

Attachment linked to a notification.

**Properties:**

| Name        | Data Type | Can Be Null | Read Only | Description                           |
| ----------- | --------- | ----------- | --------- | ------------------------------------- |
| contentType | string    | No          | Yes       | Content type of the attachment        |
| name        | text      | No          | Yes       | Name of the attachment                |
| sizeBytes   | long      | No          | Yes       | Size of the attachment, in bytes      |
| url         | string    | No          | Yes       | URL to use to download the attachment |

---

### `notification.reference.Reference`

Reference data for /notification.

**Properties:**

| Name       | Data Type                                    | Can Be Null | Read Only | Description                       |
| ---------- | -------------------------------------------- | ----------- | --------- | --------------------------------- |
| categories | `notification.reference.ReferenceCategory[]` | No          | Yes       | Available notification categories |
| priorities | `notification.reference.ReferencePriority[]` | No          | Yes       | Available notification priorities |

---

### `notification.reference.ReferenceCategory`

Category of a notification.

**Properties:**

| Name        | Data Type | Can Be Null | Read Only | Description          |
| ----------- | --------- | ----------- | --------- | -------------------- |
| description | string    | No          | Yes       | Category description |
| name        | string    | No          | Yes       | Category name        |

---

### `notification.reference.ReferencePriority`

Priority of a notification.

**Properties:**

| Name        | Data Type                                       | Can Be Null | Read Only | Description          |
| ----------- | ----------------------------------------------- | ----------- | --------- | -------------------- |
| description | string                                          | No          | Yes       | Priority description |
| name        | `notification.history.NotificationPriorityEnum` | No          | Yes       | Priority name        |

---

### `notification.routing.Routing`

A routing.

**Properties:**

| Name      | Data Type                     | Can Be Null | Read Only | Description                              |
| --------- | ----------------------------- | ----------- | --------- | ---------------------------------------- |
| active    | boolean                       | No          | No        | Whether this routing is currently active |
| createdAt | datetime                      | No          | Yes       | Date at which the routing was created    |
| id        | uuid                          | No          | Yes       | ID of the routing                        |
| name      | string                        | No          | No        | Name of the routing                      |
| rules     | `notification.routing.Rule[]` | No          | No        | Rules for the routing                    |

---

### `notification.routing.Rule`

A routing rule.

**Properties:**

| Name         | Data Type                                | Can Be Null | Read Only | Description                        |
| ------------ | ---------------------------------------- | ----------- | --------- | ---------------------------------- |
| condition    | `notification.routing.RuleCondition`     | No          | No        | Condition for the route to match   |
| contactMeans | `notification.routing.RuleContactMean[]` | No          | No        | Contact means to use for this rule |

---

### `notification.routing.RuleCondition`

A routing rule condition.

**Properties:**

| Name     | Data Type | Can Be Null | Read Only | Description     |
| -------- | --------- | ----------- | --------- | --------------- |
| field    | string    | No          | No        | Field to match  |
| operator | string    | No          | No        | Operator to use |
| value    | string    | No          | No        | Value to match  |

---

### `notification.routing.RuleContactMean`

A routing rule contact mean.

**Properties:**

| Name          | Data Type                           | Can Be Null | Read Only | Description              |
| ------------- | ----------------------------------- | ----------- | --------- | ------------------------ |
| contactMeanId | uuid                                | No          | No        | Contact mean ID          |
| type          | `notification.contactMean.TypeEnum` | No          | No        | Type of the contact mean |

---

## Notes

- **API Status:** All operations are marked as `PRODUCTION` unless otherwise specified.
- **Pagination:** Use `X-Pagination-Cursor` and `X-Pagination-Size` headers for pagination.
- **IAM Actions:** Ensure your OVHcloud account has the required IAM permissions before using this node.
- **Error Handling:** Validate inputs before making API calls. Handle errors gracefully and provide meaningful error messages.
- **Testing:** Manual testing is required via an n8n instance. Use `npm run dev` for hot reload testing during development.
