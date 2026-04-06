import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Change mailing list options.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/mailingList/{name}/changeOptions
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Mailing List Name',
			name: 'mailingListName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the mailing list',
			displayOptions,
		},
		{
			displayName: 'Options',
			name: 'options',
			type: 'options',
			options: [
				{ name: 'Moderated', value: 'moderated' },
				{ name: 'Non Moderated', value: 'non_moderated' },
				{ name: 'Public', value: 'public' },
				{ name: 'Private', value: 'private' },
			],
			default: 'public',
			required: true,
			description: 'New options for the mailing list',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Mailing List Options operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const mailingListName = this.getNodeParameter('mailingListName', 0) as string;
	const options = this.getNodeParameter('options', 0, 'public') as string;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/mailingList/${mailingListName}/changeOptions`,
		{ options },
	)) as IDataObject;
	return [{ json: data }];
}
