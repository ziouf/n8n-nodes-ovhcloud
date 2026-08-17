import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
    IExecuteFunctions,
    IDisplayOptions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
        	...projectIdLocator(),
            displayOptions,
        },
        {
            displayName: 'Alert ID',
            name: 'alertId',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
    ];
}

/**
 * Executes the Delete Alerting Rule operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/alerting/{alertId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const alertId = this.getNodeParameter('alertId', _itemIndex ?? 0) as string;
    
    await client.httpDelete(`/cloud/project/${serviceName}/alerting/${alertId}`);

    return this.helpers.returnJsonArray([{ deleted: alertId }]);
}
