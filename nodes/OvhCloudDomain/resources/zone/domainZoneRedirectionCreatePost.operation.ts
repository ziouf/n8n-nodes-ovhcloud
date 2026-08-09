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
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Subdomain to redirect',
			displayOptions,
		},
		{
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			required: true,
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
			required: true,
			description: 'Type value',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a new redirection (Don't forget to refresh the zone) operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/redirection
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const body: IDataObject = {};
		const description = this.getNodeParameter('description', _itemIndex, '') as string;
		if (description !== '') body['description'] = description;
		const keywords = this.getNodeParameter('keywords', _itemIndex, '') as string;
		if (keywords !== '') body['keywords'] = keywords;
		const subDomain = this.getNodeParameter('subDomain', _itemIndex, '') as string;
		if (subDomain !== '') body['subDomain'] = subDomain;
		const target = this.getNodeParameter('target', _itemIndex, '') as string;
		body['target'] = target;
		const title = this.getNodeParameter('title', _itemIndex, '') as string;
		if (title !== '') body['title'] = title;
		const type = this.getNodeParameter('type', _itemIndex, '') as string;
		body['type'] = type;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/redirection`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
