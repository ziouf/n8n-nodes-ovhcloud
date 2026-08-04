# OVH Cloud Database as a Service

> Manage database-as-a-service via `/dbaas/logs` API v1

## Overview

This node implements the full `docs/api-specs/v1/dbaas.json` API — **116 operations** (one per endpoint) with **232 tests** (2 per operation). Each operation maps to a spec endpoint under `/dbaas/logs/{serviceName}/...` and is grouped in a family subdirectory.

The main parameter is the **Service Name** (`serviceName`), the identifier of the DBAAS-Logs service.

## Structure

| Family                    | Operations | Description                                                                                                                                           |
| ------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `service/`                | 11         | Service lifecycle (`/dbaas/logs`, `/dbaas/logs/{serviceName}`, `changeContact`, `metrics`, `operation`, `serviceInfos`, `url`, `user/changePassword`) |
| `cluster/`                | 5          | Clusters + cluster retention (`/cluster`, `/cluster/{clusterId}`, `/cluster/{clusterId}/retention`)                                                   |
| `encryptionKey/`          | 4          | Encryption keys management                                                                                                                            |
| `input/`                  | 21         | Inputs, engines, helpers, configuration (flowgger/logstash), configtest, start/restart/end, urls                                                      |
| `outputGraylogDashboard/` | 7          | Graylog dashboards (incl. duplicate, url)                                                                                                             |
| `outputGraylogStream/`    | 22         | Graylog streams (incl. alert, archive, rule, subscription, url)                                                                                       |
| `outputOpenSearchAlias/`  | 12         | OpenSearch aliases (attach/detach index & stream, url)                                                                                                |
| `outputOpenSearchIndex/`  | 6          | OpenSearch indexes (incl. url)                                                                                                                        |
| `outputOpenSearchOsd/`    | 6          | OpenSearch Dashboards instances (incl. url)                                                                                                           |
| `role/`                   | 18         | Roles, members, permissions (alias/dashboard/index/osd/stream)                                                                                        |
| `token/`                  | 4          | Service tokens                                                                                                                                        |

## Available Operations

Each operation file `<family>/<opId>.operation.ts` implements one spec endpoint:

```ts
export async function execute(
    this: IExecuteFunctions,
    itemIndex: number,
): Promise<INodeExecutionData[]> {
    const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
    // ...path / query / body parameters...
    const client = new ApiClient(this);
    const data = (await client.httpGet(
        `/dbaas/logs/${encodeURIComponent(serviceName)}/cluster`,
    )) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
```

Path parameters are URL-encoded via `encodeURIComponent`. Query parameters are optional; bodies are accepted as JSON (model type documented on the `Body` field).

**Total:** 116 operations, 232 tests
