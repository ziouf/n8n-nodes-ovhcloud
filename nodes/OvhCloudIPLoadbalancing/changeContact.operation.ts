import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

 
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your IP load balancing',
		},
		{
			displayName: 'Admin Contact',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'Admin contact ID (format: coreTypes.AccountId:string)',
		},
		{
			displayName: 'Technical Contact',
			name: 'contactTechnical',
			type: 'string',
			default: '',
			description: 'Technical contact ID (format: coreTypes.AccountId:string)',
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex) as string | undefined;
	const contactTechnical = this.getNodeParameter('contactTechnical', _itemIndex) as
		string | undefined;

	const body: IDataObject = {};
	if (contactAdmin) body.contactAdmin = contactAdmin;
	if (contactTechnical) body.contactTechnical = contactTechnical;

	await client.httpPost(`/ipLoadbalancing/${serviceName}/changeContact`, body);
	return this.helpers.returnJsonArray([{ success: true }]);
}
