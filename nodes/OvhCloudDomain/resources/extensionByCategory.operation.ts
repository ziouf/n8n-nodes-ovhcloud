import type { IDisplayOptions, IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';


import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Category Type',
			name: 'categoryType',
			type: 'multiOptions',
			options: [
				{ name: 'Geolocalization', value: 'geolocalization' },
				{ name: 'Thematic', value: 'thematic' },
			],
			default: [],
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
	const categoryType = this.getNodeParameter('categoryType', 0) as string[] | string;
	if (Array.isArray(categoryType)) {
		qs.categoryType = categoryType.join(',');
	} else if (typeof categoryType === 'string' && categoryType.length > 0) {
		qs.categoryType = categoryType;
	}
	const data = (await client.httpGet('/domain/extensions/byCategory', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
