# Common Models

Shared type definitions that appear across multiple OVHcloud API resources.

## Task Types

### `common.Task`

Asynchronous operation currently running.

| Property   | Type            | Description                      |
| ---------- | --------------- | -------------------------------- |
| `id`       | `long` / `uuid` | Identifier of the task           |
| `date`     | `datetime`      | Task creation date               |
| `state`    | `TaskStateEnum` | Current state of the task        |
| `progress` | `long`          | Task progress percentage (0–100) |
| `type`     | `TaskTypeEnum`  | Type of the task                 |

### `common.TaskError`

Error that occurred during a task.

| Property  | Type     | Description       |
| --------- | -------- | ----------------- |
| `message` | `string` | Error description |

### `common.CurrentTask`

Asynchronous operation currently running (v2 API variant).

| Property | Type                    | Description                               |
| -------- | ----------------------- | ----------------------------------------- |
| `id`     | `uuid`                  | Identifier of the current task            |
| `link`   | `string`                | Link to the task details                  |
| `status` | `CurrentTaskStatusEnum` | Current global status of the current task |
| `type`   | `string`                | Type of the current task                  |
| `errors` | `TaskError[]`           | Errors that occurred on the task          |

### `common.CurrentTaskStatusEnum`

| Value                | Description            |
| -------------------- | ---------------------- |
| `ERROR`              | Task encountered error |
| `PENDING`            | Task is pending        |
| `RUNNING`            | Task is running        |
| `SCHEDULED`          | Task is scheduled      |
| `WAITING_USER_INPUT` | Awaiting user input    |

### `common.ResourceStatusEnum`

Resource readiness status in the system.

| Value         | Description                |
| ------------- | -------------------------- |
| `CREATING`    | Resource is being created  |
| `DELETING`    | Resource is being deleted  |
| `ERROR`       | Resource is in error state |
| `OUT_OF_SYNC` | Resource is out of sync    |
| `READY`       | Resource is ready          |
| `SUSPENDED`   | Resource is suspended      |
| `UPDATING`    | Resource is being updated  |

## IAM Types

### `iam.ResourceMetadata`

IAM resource metadata embedded in service models.

| Property      | Type                             | Description                                                   |
| ------------- | -------------------------------- | ------------------------------------------------------------- |
| `id`          | `uuid`                           | Unique identifier of the resource                             |
| `name`        | `string`                         | Resource name                                                 |
| `type`        | `string`                         | Resource type                                                 |
| `displayName` | `string`                         | Human-readable display name                                   |
| `owner`       | `string`                         | Resource owner                                                |
| `tags`        | `map[string]string`              | Resource tags (internally computed tags prefixed with `ovh:`) |
| `urn`         | `string`                         | Unique resource name used in policies                         |
| `state`       | `iam.ResourceMetadata.StateEnum` | Resource state                                                |

### `iam.ResourceMetadata.StateEnum`

| Value         | Description               |
| ------------- | ------------------------- |
| `EXPIRED`     | Resource has expired      |
| `IN_CREATION` | Resource is being created |
| `OK`          | Resource is active        |
| `SUSPENDED`   | Resource is suspended     |

### `iam.resource.TagFilter`

Resource tag filter used in query parameters.

| Property   | Type                                  | Description                                                    |
| ---------- | ------------------------------------- | -------------------------------------------------------------- |
| `operator` | `iam.resource.TagFilter.OperatorEnum` | Operator to use when filtering on the value (defaults to `EQ`) |
| `value`    | `string`                              | Value to use when filtering tags                               |

### `iam.resource.TagFilter.OperatorEnum`

| Value     | Description                    |
| --------- | ------------------------------ |
| `EQ`      | Equal                          |
| `EXISTS`  | Tag key exists                 |
| `ILIKE`   | Case-insensitive pattern match |
| `LIKE`    | Case-sensitive pattern match   |
| `NEQ`     | Not equal                      |
| `NEXISTS` | Tag key does not exist         |
