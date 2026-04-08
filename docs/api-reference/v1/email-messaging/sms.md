# OVHcloud SMS Node Documentation

This document describes the technical implementation of the **SMS Node** for the OVHcloud API within the n8n-nodes-ovhcloud project. It is intended for **developers** and **operators** working on the node implementation or integrating new SMS operations.

---

## 📌 Overview

The **SMS Node** provides a set of n8n-compatible node implementations to interact with OVHcloud's SMS API services. It allows users to send SMS messages, manage batches, retrieve incoming/outgoing SMS logs, and interact with related features such as HLR lookups, blacklists, and virtual numbers.

This node is part of the **OVHcloud** ecosystem and integrates with the OVHcloud API authentication system. It supports multiple SMS operations including sending, receiving, and querying SMS-related resources.

---

## 🧩 Prerequisites

Before using or developing the SMS Node:

- **n8n Instance**: Must be installed and running (version compatible with custom nodes).
- **OVHcloud Account**: Valid OVHcloud account with SMS services enabled.
- **API Credentials**: OVHcloud API application key, secret key, and consumer key.
- **Node Installation**: The node must be installed in the n8n custom nodes directory.
- **Node Dependencies**: Ensure all required dependencies are installed (`n8n-workflow`, `luxon`, etc.).

---

## 📂 Node Structure

The node is structured as follows:

```
n8n-nodes-ovhcloud/
├── nodes/
│   └── OvhCloud/
│       ├── SMS/
│       │   ├── resources/
│       │   │   └── sms.node.ts
│       │   └── operations/
│       │       ├── batches/
│       │       ├── hlr/
│       │       ├── virtualNumbers/
│       │       └── ...
└── docs/
    └── v1/
        └── sms.md
```

Each operation is implemented as a separate file in `nodes/OvhCloud/SMS/operations/` and follows the same pattern:

- **Description**: A brief description of the operation.
- **Execute Function**: Handles the operation logic and HTTP requests.
- **Methods List Search**: Used for dynamic options and validation.
- **Display Options**: Conditional visibility of node properties.

---

## 🔧 Authentication

The SMS Node uses the **OVHcloud API Credential** type for authentication. This credential type requires:

- **Host**: The OVHcloud API endpoint (e.g., `api.ovh.com` or `api.ovh.com/eu`).
- **Application Key**: Your OVHcloud application key.
- **Application Secret**: Your OVHcloud application secret.
- **Consumer Key**: Your OVHcloud consumer key.

### Example Authentication Setup

1. **Create an OVHcloud API Credential** in n8n:
   - Go to **Credentials** > **Add Credential** > **OVHcloud API**.
   - Fill in the required fields:
     - Host: `api.ovh.com`
     - Application Key: `your-application-key`
     - Application Secret: `your-application-secret`
     - Consumer Key: `your-consumer-key`

2. **Use the Credential in the SMS Node**:
   - Select the credential in the node's authentication dropdown.
   - Ensure the credential is valid and has the required IAM actions enabled.

---

## 🚀 Available Operations

The SMS Node supports the following operations, grouped by resource type:

### 1. SMS Services

#### **List Available Services**

- **Path**: `/sms`
- **HTTP Method**: `GET`
- **Description**: List available SMS services associated with your OVHcloud account.
- **Response Type**: `string[]`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:get` (required)
- **Parameters**:
  - `iamTags` (optional): Filter resources based on IAM tags.
    - **Type**: `map[string][]iam.resource.TagFilter`
    - **Param Type**: `query`

**Example**:

```json
{
    "iamTags": {
        "tag1": ["value1", "value2"],
        "tag2": ["value3"]
    }
}
```

---

### 2. SMS Estimate

#### **Get SMS Encoding Estimate**

- **Path**: `/sms/estimate`
- **HTTP Method**: `POST`
- **Description**: Get the encoding, length, and number of SMS parts for a given message.
- **Response Type**: `sms.JobEstimate`
- **Authentication**: Required
- **IAM Actions**: `account:apiovh:sms/estimate` (required)

**Parameters**:

- `message` (required): The message to estimate.
  - **Type**: `text`
  - **Param Type**: `body`
- `noStopClause` (required): Do not display STOP clause in the message.
  - **Type**: `boolean`
  - **Param Type**: `body`
- `senderType` (required): The sender type to be used.
  - **Type**: `sms.TypeSenderEnum`
  - **Values**: `alphanumeric`, `numeric`, `shortCode`, `phoneNumber`
  - **Param Type**: `body`

**Example Request**:

```json
{
    "message": "Hello, this is a test message",
    "noStopClause": true,
    "senderType": "alphanumeric"
}
```

---

### 3. PTT (Premium Transaction Tracking)

#### **Get PTT Details**

- **Path**: `/sms/ptts`
- **HTTP Method**: `GET`
- **Description**: Retrieve information about a given PTT code.
- **Response Type**: `sms.PttDetails`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:ptts/get` (required)

**Parameters**:

- `ptt` (required): The PTT code.
  - **Type**: `long`
  - **Param Type**: `query`

---

### 4. SMS Rates

#### **Get Destination Rates**

- **Path**: `/sms/rates/destinations`
- **HTTP Method**: `GET`
- **Description**: Get the prices and credits to send an SMS to a given country.
- **Response Type**: `sms.DestinationRates`
- **Authentication**: Not required

**Parameters**:

- `billingCountry` (optional): Country where you buy credits.
  - **Type**: `sms.BillingCountryEnum`
  - **Values**: `FR`, `EU`, etc.
- `country` (required): Country where you send SMS.
  - **Type**: `sms.CountryEnum`
  - **Values**: `FR`, `US`, `GB`, etc.

---

#### **Get Pack Details**

- **Path**: `/sms/rates/packs`
- **HTTP Method**: `GET`
- **Description**: Get the prices and credits of all SMS packs for a given destination country.
- **Response Type**: `sms.PackDetails[]`
- **Authentication**: Not required

**Parameters**:

- `billingCountry` (optional): Country where you buy credits.
- `country` (required): Destination country for SMS.

---

### 5. Virtual Numbers

#### **List Virtual Numbers**

- **Path**: `/sms/virtualNumbers`
- **HTTP Method**: `GET`
- **Description**: List virtual numbers associated with your SMS account.
- **Response Type**: `string[]`
- **Authentication**: Required
- **IAM Actions**: `smsVirtualNumbers:apiovh:get` (required)

**Parameters**:

- `iamTags` (optional): Filter resources based on IAM tags.

---

#### **Get Virtual Number Details**

- **Path**: `/sms/virtualNumbers/{number}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details about a specific virtual number.
- **Response Type**: `sms.VirtualNumberGenericServiceWithIAM`
- **Authentication**: Required

**Parameters**:

- `number` (required): The virtual number.
  - **Type**: `string`
  - **Param Type**: `path`

---

#### **Update Virtual Number Service Info**

- **Path**: `/sms/virtualNumbers/{number}/serviceInfos`
- **HTTP Method**: `PUT`
- **Description**: Update service information for a virtual number.
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**: `smsVirtualNumbers:apiovh:serviceInfos/edit` (required)

**Parameters**:

- `number` (required): The virtual number.
- `service` (required): New service properties.
  - **Type**: `services.Service`
  - **Param Type**: `body`

---

### 6. SMS Batches

#### **Get Batches List**

- **Path**: `/sms/{serviceName}/batches`
- **HTTP Method**: `GET`
- **Description**: Retrieve the list of SMS batches for a given service.
- **Response Type**: `sms.Batch[]`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:batches/get` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
  - **Type**: `string`
  - **Param Type**: `path`

---

#### **Create a Batch**

- **Path**: `/sms/{serviceName}/batches`
- **HTTP Method**: `POST`
- **Description**: Create a new SMS batch.
- **Response Type**: `sms.Batch`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:batches/create` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `batchParams` (required): Parameters for the batch.
  - **Type**: `sms.BatchParams`
  - **Param Type**: `body`

**Example Request**:

```json
{
    "receivers": ["+33612345678", "+33687654321"],
    "message": "Hello, this is a batch message",
    "noStopClause": true,
    "sender": "MySender",
    "senderType": "alphanumeric",
    "tag": "marketing"
}
```

---

#### **Get Batch Details**

- **Path**: `/sms/{serviceName}/batches/{id}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details about a specific batch.
- **Response Type**: `sms.Batch`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The batch ID.
  - **Type**: `uuid`
  - **Param Type**: `path`

---

#### **Update a Batch**

- **Path**: `/sms/{serviceName}/batches/{id}`
- **HTTP Method**: `PUT`
- **Description**: Update properties of an existing batch.
- **Response Type**: `sms.Batch`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:batches/edit` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The batch ID.
- `batchUpdateParams` (required): New properties for the batch.
  - **Type**: `sms.BatchUpdateParams`
  - **Param Type**: `body`

---

#### **Cancel a Batch**

- **Path**: `/sms/{serviceName}/batches/{id}/cancel`
- **HTTP Method**: `POST`
- **Description**: Cancel a deferred batch before any SMS is sent.
- **Response Type**: `sms.Batch`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:batches/cancel` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The batch ID.

---

#### **Get Batch Statistics**

- **Path**: `/sms/{serviceName}/batches/{id}/statistics`
- **HTTP Method**: `GET`
- **Description**: Retrieve statistics for a specific batch.
- **Response Type**: `sms.BatchStatistics`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The batch ID.

---

### 7. SMS Blacklists

#### **List Blacklisted Numbers**

- **Path**: `/sms/{serviceName}/blacklists`
- **HTTP Method**: `GET`
- **Description**: Retrieve the list of blacklisted numbers for a given service.
- **Response Type**: `sms.Blacklist[]`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:blacklists/get` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `batchID` (optional): Filter blacklisted numbers by batch ID.

---

#### **Add Number to Blacklist**

- **Path**: `/sms/{serviceName}/blacklists/{number}`
- **HTTP Method**: `PUT`
- **Description**: Add a number to the blacklist.
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:blacklists/put` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `number` (required): The number to blacklist.

---

#### **Remove Number from Blacklist**

- **Path**: `/sms/{serviceName}/blacklists/{number}`
- **HTTP Method**: `DELETE`
- **Description**: Remove a blacklisted number.
- **Response Type**: `void`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `number` (required): The blacklisted number.

---

### 8. HLR (Home Location Register)

#### **Get HLR Details**

- **Path**: `/sms/{serviceName}/hlr/{id}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details about a specific HLR lookup.
- **Response Type**: `sms.HlrLookupNumber`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:hlr/get` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The HLR lookup ID.

---

#### **Get HLR Operator Info**

- **Path**: `/sms/{serviceName}/hlr/{id}/operator`
- **HTTP Method**: `GET`
- **Description**: Retrieve operator information for a specific HLR lookup.
- **Response Type**: `sms.Hlr`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The HLR lookup ID.

---

### 9. Incoming SMS

#### **List Incoming SMS**

- **Path**: `/sms/{serviceName}/incoming`
- **HTTP Method**: `GET`
- **Description**: Retrieve the list of incoming SMS messages.
- **Response Type**: `sms.Incoming[]`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:incoming/get` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `creationDatetime.from` (optional): Filter by creation date (>=).
- `creationDatetime.to` (optional): Filter by creation date (<=).
- `sender` (optional): Filter by sender number.
- `tag` (optional): Filter by tag.

---

#### **Get Incoming SMS Details**

- **Path**: `/sms/{serviceName}/incoming/{id}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details about a specific incoming SMS.
- **Response Type**: `sms.Incoming`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The incoming SMS ID.

---

#### **Delete Incoming SMS**

- **Path**: `/sms/{serviceName}/incoming/{id}`
- **HTTP Method**: `DELETE`
- **Description**: Delete an incoming SMS from history.
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:incoming/delete` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The incoming SMS ID.

---

### 10. Outgoing SMS

#### **List Outgoing SMS**

- **Path**: `/sms/{serviceName}/outgoing`
- **HTTP Method**: `GET`
- **Description**: Retrieve the list of outgoing SMS messages.
- **Response Type**: `sms.Outgoing[]`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:outgoing/get` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `batchID` (optional): Filter by batch ID.
- `creationDatetime.from` (optional): Filter by creation date (>=).
- `creationDatetime.to` (optional): Filter by creation date (<=).
- `receiver` (optional): Filter by receiver number.
- `sender` (optional): Filter by sender number.
- `tag` (optional): Filter by tag.

---

#### **Get Outgoing SMS Details**

- **Path**: `/sms/{serviceName}/outgoing/{id}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details about a specific outgoing SMS.
- **Response Type**: `sms.Outgoing`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The outgoing SMS ID.

---

#### **Delete Outgoing SMS**

- **Path**: `/sms/{serviceName}/outgoing/{id}`
- **HTTP Method**: `DELETE`
- **Description**: Delete an outgoing SMS from history.
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:outgoing/delete` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The outgoing SMS ID.

---

#### **Get HLR Info for Outgoing SMS**

- **Path**: `/sms/{serviceName}/outgoing/{id}/hlr`
- **HTTP Method**: `GET`
- **Description**: Retrieve HLR information for a specific outgoing SMS.
- **Response Type**: `sms.Hlr`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The outgoing SMS ID.

---

### 11. SMS Jobs

#### **List SMS Jobs**

- **Path**: `/sms/{serviceName}/jobs`
- **HTTP Method**: `GET`
- **Description**: Retrieve the list of SMS jobs (pending messages) for a given service.
- **Response Type**: `sms.Job[]`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:jobs/get` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.

---

#### **Create SMS Jobs**

- **Path**: `/sms/{serviceName}/jobs`
- **HTTP Method**: `POST`
- **Description**: Add one or several SMS sending jobs.
- **Response Type**: `sms.SmsSendingReport`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:jobs/create` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `message` (required): The SMS message.
- `receivers` (optional): List of receiver numbers.
- `receiversDocumentUrl` (optional): CSV file containing receiver numbers.
- `receiversSlotId` (optional): Slot ID for receivers document.
- `charset` (optional): SMS message charset.
  - **Type**: `sms.CharsetEnum`
  - **Values**: `GSM`, `UCS2`, `LATIN1`
- `noStopClause` (optional): Do not display STOP clause in the message.
- `priority` (optional): Priority level of the message.
  - **Type**: `sms.PriorityEnum`
  - **Values**: `high`, `normal`
- `tag` (optional): Tag to group messages.
- `sender` (optional): Sender of the message.
- `senderType` (optional): Type of sender.
- `validityPeriod` (optional): Maximum time before message is dropped.
- `differedPeriod` (optional): Time to wait before sending the message.

**Example Request**:

```json
{
    "serviceName": "sms-fr",
    "message": "Hello, this is a test message",
    "receivers": ["+33612345678", "+33687654321"],
    "noStopClause": true,
    "sender": "MyCompany",
    "senderType": "alphanumeric",
    "tag": "marketing",
    "priority": "high",
    "validityPeriod": 1440,
    "differedPeriod": 60
}
```

---

#### **Get SMS Job Details**

- **Path**: `/sms/{serviceName}/jobs/{id}`
- **HTTP Method**: `GET`
- **Description**: Retrieve details about a specific SMS job.
- **Response Type**: `sms.Job`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The job ID.

---

#### **Delete SMS Job**

- **Path**: `/sms/{serviceName}/jobs/{id}`
- **HTTP Method**: `DELETE`
- **Description**: Delete an SMS job (stop sending).
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:jobs/delete` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `id` (required): The job ID.

---

### 12. Phonebooks

#### **List Phonebooks**

- **Path**: `/sms/{serviceName}/phonebooks`
- **HTTP Method**: `GET`
- **Description**: Retrieve the list of phonebooks associated with your SMS account.
- **Response Type**: `string[]`
- **Authentication**: Required
- **IAM Actions**: `sms:apiovh:phonebooks/get` (required)

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.

---

#### **Create Phonebook**

- **Path**: `/sms/{serviceName}/phonebooks`
- **HTTP Method**: `POST`
- **Description**: Create a new phonebook.
- **Response Type**: `void`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `name` (required): The name of the phonebook.

---

#### **Delete Phonebook**

- **Path**: `/sms/{serviceName}/phonebooks/{name}`
- **HTTP Method**: `DELETE`
- **Description**: Delete a phonebook.
- **Response Type**: `void`
- **Authentication**: Required

**Parameters**:

- `serviceName` (required): The internal name of your SMS offer.
- `name` (required): The name of the phonebook.

---

## 📝 Node Properties

The SMS Node supports the following properties in the n8n UI:

### **Common Properties**

- **Resource**: Select the SMS resource type (e.g., `Batches`, `HLR`, `Incoming`, `Outgoing`, `Jobs`, `Phonebooks`).
- **Operation**: Select the operation to perform (e.g., `Get`, `Create`, `Update`, `Delete`).
- **Service Name**: The internal name of your SMS offer (required for most operations).
- **Authentication**: Select the OVHcloud API credential to use.

---

### **Resource-Specific Properties**

#### **Batches**

- **Batch ID**: Required for `Get Batch`, `Update Batch`, `Cancel Batch`, `Get Batch Statistics`.
- **Deferred Period**: Required for `Create Batch`.

#### **HLR**

- **HLR ID**: Required for `Get HLR Details`, `Get HLR Operator Info`.

#### **Incoming**

- **Incoming SMS ID**: Required for `Get Incoming SMS Details`, `Delete Incoming SMS`.

#### **Outgoing**

- **Outgoing SMS ID**: Required for `Get Outgoing SMS Details`, `Delete Outgoing SMS`.

#### **Jobs**

- **Job ID**: Required for `Get Job Details`, `Delete Job`.

#### **Phonebooks**

- **Phonebook Name**: Required for `Create Phonebook`, `Delete Phonebook`.

---

## 🔄 Error Handling

The SMS Node throws `NodeApiError` for n8n-specific errors and handles API errors gracefully. Ensure you:

- Validate all inputs before making API calls.
- Check the error message and context provided by the node.
- Handle errors appropriately in your workflows.

**Example Error Handling in Workflow**:

```json
{
    "error": {
        "name": "NodeApiError",
        "message": "Failed to send SMS: Invalid receiver number format",
        "context": {
            "receiver": "+33612345678",
            "errorCode": 400
        }
    }
}
```

---

## 🧪 Testing

The SMS Node is manually tested via the n8n UI. To test the node:

1. Run the node in development mode:

   ```bash
   npm run dev
   ```

2. Add the node to a workflow in n8n.
3. Configure the node with valid parameters.
4. Execute the workflow and verify the output.

---

## 📚 References

- [OVHcloud SMS API Documentation](https://api.ovh.com/console/#/sms) (official)
- [n8n Custom Nodes Documentation](https://docs.n8n.io/integrations/core-nodes/custom-nodes/)
- [OVHcloud API Authentication Guide](https://docs.ovh.com/gb/en/api/api-overview/)
- [TypeScript Style Guide](https://github.com/microsoft/TypeScript/wiki/Coding-guidelines)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)

---

## 📝 Changelog

- **v1.0**: Initial stable release of the SMS Node.
- **Future Enhancements**:
  - Add support for SMS sending reports.
  - Enhance batch management with bulk operations.
  - Improve error messages for invalid receiver numbers.
  - Add support for new OVHcloud SMS features as they are released.

---

## 🛠️ Troubleshooting

### **Common Issues**

| Issue                     | Description                                                             | Solution                                                                            |
| ------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Invalid Credential`      | The credential is not valid or missing required IAM actions.            | Ensure the credential is correctly configured and has the required permissions.     |
| `Receiver Number Format`  | The receiver number is not in the correct format.                       | Use the format `+[countryCode][number]` (e.g., `+33612345678`).                     |
| `Authentication Required` | The operation requires authentication but none is provided.             | Select a valid OVHcloud API credential in the node's authentication property.       |
| `Service Name Not Found`  | The service name does not exist or is not associated with your account. | Verify the service name using the `List Available Services` operation.              |
| `Invalid Batch ID`        | The batch ID does not exist.                                            | Ensure the batch ID is correct and retrieved from a valid `Create Batch` operation. |

---

## 📌 Notes

- Ensure all required IAM actions are enabled in your OVHcloud API credential.
- The node follows the OVHcloud API signature algorithm (SHA1).
- Use `luxon` for date handling in workflows.
- The node structure and naming conventions follow the project's guidelines.
