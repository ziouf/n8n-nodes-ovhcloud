import type {
    IDataObject,
IExecuteFunctions,
    IDisplayOptions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Public Cloud Project',
            name: 'publicCloudProjectId',
            type: 'resourceLocator',
            default: { mode: 'list', value: '' },
            required: true,
            description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
            modes: [
                {
                    displayName: 'From List',
                    name: 'list',
                    type: 'list',
                    typeOptions: { searchListMethod: 'getPublicCloudProjects' },
                },
                {
                    displayName: 'By ID',
                    name: 'name',
                    type: 'string',
                    placeholder: '12345678-1234-1234-1234-1234567890ab',
                },
            ],
            displayOptions,
        },
        {
            displayName: 'Kubernetes ID',
            name: 'kubeId',
            type: 'string',
            default: '',
            required: true,
            description: 'The kubeId identifier',
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
        extractValue: true,
    }) as string;
    const kubeId = this.getNodeParameter('kubeId', 0) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/capabilities/kube/${kubeId}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
