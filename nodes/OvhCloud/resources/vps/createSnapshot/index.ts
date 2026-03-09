import { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiClient } from "../../../shared/OvhCloudApiClient";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Service Name',
            name: 'serviceName',
            description: 'The name of the VPS service to retrieve. This can be set manually or selected from the list of services.',
            type: 'resourceLocator',
            default: {
                mode: 'str',
                value: '',
            },
            modes: [
                {
                    displayName: 'By Name',
                    name: 'str',
                    type: 'string',
                },
                {
                    displayName: 'From List',
                    name: 'list',
                    type: 'list',
                    placeholder: 'Select a service...',
                    typeOptions: {
                        searchListMethod: 'getVpsServices',
                        searchable: true,
                    },
                },
            ],
            displayOptions,
        },
        {
            displayName: 'Description',
            name: 'description',
            type: 'string',
            default: '',
            description: 'Description for the snapshot',
            displayOptions,
        },
    ];
}

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true });
    const description = this.getNodeParameter('description', 0, { extractValue: true });
    const body: IDataObject = { description};
    return client.httpPost(`/vps/${serviceName}/createSnapshot`, body);
}
