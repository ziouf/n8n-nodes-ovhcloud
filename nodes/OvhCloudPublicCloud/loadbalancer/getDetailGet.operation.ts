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
            displayName: 'Load Balancer ID',
            name: 'lbId',
            type: 'string',
            default: '',
            required: true,
            description: 'The lbId identifier',
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Load Balancer Details operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/loadbalancer/{lbId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const lbId = this.getNodeParameter('lbId', _itemIndex ?? 0) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/loadbalancer/${lbId}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
