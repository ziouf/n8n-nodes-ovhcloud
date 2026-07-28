import type { IDisplayOptions, IExecuteFunctions } from 'n8n-workflow';

import {
	execute as executeListAllDomains,
	description as descriptionListAllDomains,
} from './resources/listAllDomains.operation';
import {
	execute as executeGetCertificateByResourceName,
	description as descriptionGetCertificateByResourceName,
} from './resources/getCertificateByResourceName.operation';
import {
	execute as executeCreateCertificateByResourceName,
	description as descriptionCreateCertificateByResourceName,
} from './resources/createCertificateByResourceName.operation';
import {
	execute as executeUpdateCertificateByResourceName,
	description as descriptionUpdateCertificateByResourceName,
} from './resources/updateCertificateByResourceName.operation';

export function description(displayOptions: IDisplayOptions) {
	const operationProperties = [
		{
			displayName: 'Operation',
			name: 'sslOperation' as const,
			type: 'options' as const,
			noDataExpression: true as const,
			options: [
				{
					name: 'List All Domains',
					value: 'listAllDomains',
					action: 'List all SSL certificate domains',
				},
				{
					name: 'Get Certificate By Resource Name',
					value: 'getCertificateByResourceName',
					action: 'Get an SSL certificate for a web hosting resource by its name (v2)',
				},
				{
					name: 'Create Certificate By Resource Name',
					value: 'createCertificateByResourceName',
					action: 'Create an SSL certificate for a web hosting resource (v2)',
				},
				{
					name: 'Update Certificate By Resource Name',
					value: 'updateCertificateByResourceName',
					action: 'Update an SSL certificate on a web hosting resource (v2)',
				},
			],
			default: 'listAllDomains',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...(descriptionListAllDomains() || []),
		...(descriptionGetCertificateByResourceName({
			...displayOptions,
			show: { sslOperation: ['getCertificateByResourceName'] },
		}) || []),
		...(descriptionCreateCertificateByResourceName({
			...displayOptions,
			show: { sslOperation: ['createCertificateByResourceName'] },
		}) || []),
		...(descriptionUpdateCertificateByResourceName({
			...displayOptions,
			show: { sslOperation: ['updateCertificateByResourceName'] },
		}) || []),
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number) {
	const operation = this.getNodeParameter('sslOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'listAllDomains':
			return executeListAllDomains.call(this);
		case 'getCertificateByResourceName':
			return executeGetCertificateByResourceName.call(this, itemIndex);
		case 'createCertificateByResourceName':
			return executeCreateCertificateByResourceName.call(this, itemIndex);
		case 'updateCertificateByResourceName':
			return executeUpdateCertificateByResourceName.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ssl"`);
}
