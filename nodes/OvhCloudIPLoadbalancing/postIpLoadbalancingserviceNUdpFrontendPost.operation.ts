import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'DedicatedIpfo',
			name: 'dedicatedIpfo',
			type: 'string',
			default: '',
			description: 'The dedicatedipfo value',
			displayOptions,
		},
		{
			displayName: 'DefaultFarmId',
			name: 'defaultFarmId',
			type: 'string',
			default: '',
			description: 'The defaultfarmid value',
			displayOptions,
		},
		{
			displayName: 'Disabled',
			name: 'disabled',
			type: 'string',
			default: '',
			description: 'The disabled value',
			displayOptions,
		},
		{
			displayName: 'DisplayName',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'The displayname value',
			displayOptions,
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'string',
			default: '',
			description: 'The port value',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'The zone value',
			displayOptions,
		},
	];
}

/**
 * Add a new UDP frontend on your IP Load Balancing
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/frontend
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const dedicatedIpfo = this.getNodeParameter('dedicatedIpfo', _itemIndex) as string;
	const defaultFarmId = this.getNodeParameter('defaultFarmId', _itemIndex) as string;
	const disabled = this.getNodeParameter('disabled', _itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex) as string;
	const port = this.getNodeParameter('port', _itemIndex) as string;
	const zone = this.getNodeParameter('zone', _itemIndex) as string;


const body: IDataObject = {
    dedicatedIpfo: dedicatedIpfo,
    defaultFarmId: defaultFarmId,
    disabled: disabled,
    displayName: displayName,
    port: port,
    zone: zone
    };

	const client = getClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'udp' + '/' + 'frontend', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

