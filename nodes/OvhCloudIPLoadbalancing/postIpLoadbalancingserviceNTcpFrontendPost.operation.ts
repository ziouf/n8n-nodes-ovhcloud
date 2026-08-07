import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'AllowedSource',
			name: 'allowedSource',
			type: 'string',
			default: '',
			description: 'The allowedsource value',
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
			displayName: 'DefaultSslId',
			name: 'defaultSslId',
			type: 'string',
			default: '',
			description: 'The defaultsslid value',
			displayOptions,
		},
		{
			displayName: 'DeniedSource',
			name: 'deniedSource',
			type: 'string',
			default: '',
			description: 'The deniedsource value',
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
			displayName: 'Ssl',
			name: 'ssl',
			type: 'string',
			default: '',
			description: 'The ssl value',
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
 * Add a new TCP frontend on your IP Load Balancing
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/frontend
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const allowedSource = this.getNodeParameter('allowedSource', itemIndex) as string;
	const dedicatedIpfo = this.getNodeParameter('dedicatedIpfo', itemIndex) as string;
	const defaultFarmId = this.getNodeParameter('defaultFarmId', itemIndex) as string;
	const defaultSslId = this.getNodeParameter('defaultSslId', itemIndex) as string;
	const deniedSource = this.getNodeParameter('deniedSource', itemIndex) as string;
	const disabled = this.getNodeParameter('disabled', itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', itemIndex) as string;
	const port = this.getNodeParameter('port', itemIndex) as string;
	const ssl = this.getNodeParameter('ssl', itemIndex) as string;
	const zone = this.getNodeParameter('zone', itemIndex) as string;


const body: IDataObject = {
    allowedSource: allowedSource,
    dedicatedIpfo: dedicatedIpfo,
    defaultFarmId: defaultFarmId,
    defaultSslId: defaultSslId,
    deniedSource: deniedSource,
    disabled: disabled,
    displayName: displayName,
    port: port,
    ssl: ssl,
    zone: zone
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'tcp' + '/' + 'frontend', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

