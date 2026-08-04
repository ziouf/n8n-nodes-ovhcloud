import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID identifier',
			displayOptions,
		},
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description for the invisible redirection',
			displayOptions,
		},
		{
			displayName: 'Keywords',
			name: 'keywords',
			type: 'string',
			default: '',
			description: 'Keywords for the invisible redirection',
			displayOptions,
		},
		{
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			description: 'Target of the redirection',
			displayOptions,
		},
		{
			displayName: 'Title',
			name: 'title',
			type: 'string',
			default: '',
			description: 'Title for the invisible redirection',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'invisible',
			options: [
				{ name: 'Invisible', value: 'invisible' },
				{ name: 'Visible', value: 'visible' },
				{ name: 'visiblePermanent', value: 'visiblePermanent' },
			],
			description: 'Type value',
			displayOptions,
		},
	];
}

/**
 * Executes the Alter redirection object properties operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/redirection/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const id = this.getNodeParameter('id', itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const body: IDataObject = {};
		const description = this.getNodeParameter('description', itemIndex, '') as string;
		if (description !== '') body['description'] = description;
		const keywords = this.getNodeParameter('keywords', itemIndex, '') as string;
		if (keywords !== '') body['keywords'] = keywords;
		const target = this.getNodeParameter('target', itemIndex, '') as string;
		if (target !== '') body['target'] = target;
		const title = this.getNodeParameter('title', itemIndex, '') as string;
		if (title !== '') body['title'] = title;
		const type = this.getNodeParameter('type', itemIndex, '') as string;
		if (type !== '') body['type'] = type;

	const data = (await client.httpPut(`/domain/zone/${encodeURIComponent(zoneName)}/redirection/${encodeURIComponent(id)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
