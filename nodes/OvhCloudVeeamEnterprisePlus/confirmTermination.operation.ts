import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

 
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the Veeam Enterprise Plus service',
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination token sent by email to the admin contact',
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
			options: [
				{ name: 'Other', value: 'other' },
				{ name: 'Cost', value: 'cost' },
				{ name: 'Performance', value: 'performance' },
				{ name: 'No Longer Needed', value: 'noLongerNeeded' },
			],
			default: 'other',
			description: 'Reason for termination',
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'options',
			options: [
				{ name: 'Other', value: 'other' },
				{ name: 'Will Use Again', value: 'willUseAgain' },
				{ name: 'Switching Provider', value: 'switchingProvider' },
				{ name: 'Not Using Anymore', value: 'notUsingAnymore' },
			],
			default: 'other',
			description: 'What next after termination',
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			typeOptions: { rows: 4 },
			default: '',
			description: 'Commentary about your termination request',
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const token = this.getNodeParameter('token', _itemIndex) as string;
	const reason = this.getNodeParameter('reason', _itemIndex) as string | undefined;
	const futureUse = this.getNodeParameter('futureUse', _itemIndex) as string | undefined;
	const commentary = this.getNodeParameter('commentary', _itemIndex) as string | undefined;

	const body: IDataObject = {
		token,
	};

	if (reason) body.reason = reason;
	if (futureUse) body.futureUse = futureUse;
	if (commentary) body.commentary = commentary;

	const data = (await client.httpPost(
		`/veeam/veeamEnterprise/${serviceName}/confirmTermination`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
