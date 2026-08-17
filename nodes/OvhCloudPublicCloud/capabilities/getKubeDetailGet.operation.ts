import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
    IDataObject,
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
            displayName: 'Kubernetes ID',
            name: 'kubeId',
            type: 'string',
            default: '',
            required: true,
            description: 'Kubernetes cluster ID',
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Kube Capability operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/capabilities/kube/{kubeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const kubeId = this.getNodeParameter('kubeId', _itemIndex ?? 0) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/capabilities/kube/${kubeId}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
