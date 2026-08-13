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
            displayName: 'Region',
            name: 'region',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
        {
            displayName: 'Product',
            name: 'product',
            type: 'string',
            default: '',
            required: true,
            description: 'The product identifier',
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Region Product Capability operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/capabilities/region/{region}/{product}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
    const product = this.getNodeParameter('product', _itemIndex ?? 0) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/capabilities/region/${region}/${product}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
