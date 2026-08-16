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
import {
	execute as executeCertificateGetGet,
	description as descriptionCertificateGetGet,
} from './resources/certificateGetGet.operation';
import {
	execute as executeServiceInfosUpdatePut,
	description as descriptionServiceInfosUpdatePut,
} from './resources/serviceInfosUpdatePut.operation';
import {
	execute as executeServiceInfosGetGet,
	description as descriptionServiceInfosGetGet,
} from './resources/serviceInfosGetGet.operation';
import {
	execute as executeTaskListGet,
	description as descriptionTaskListGet,
} from './resources/taskListGet.operation';
import {
	execute as executeTaskGetGet,
	description as descriptionTaskGetGet,
} from './resources/taskGetGet.operation';

export function description(displayOptions: IDisplayOptions) {
	const operationProperties = [
		{
			displayName: 'Operation',
			name: 'sslOperation' as const,
			type: 'options' as const,
			noDataExpression: true as const,
			options: [
				{
					name: 'Create Certificate By Resource Name',
					value: 'createCertificateByResourceName',
					action: 'Create an SSL certificate for a web hosting resource (v2)',
				},
				{
					name: 'Get Certificate',
					value: 'getCertificate',
					action: 'Get SSL certificate details',
				},
				{
					name: 'Get Certificate By Resource Name',
					value: 'getCertificateByResourceName',
					action: 'Get an SSL certificate for a web hosting resource by its name (v2)',
				},
				{
					name: 'Get Certificate Task',
					value: 'getCertificateTask',
					action: 'Get a specific SSL certificate task',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get SSL service information',
				},
				{
					name: 'List All Domains',
					value: 'listAllDomains',
					action: 'List all SSL certificate domains',
				},
				{
					name: 'List Certificate Tasks',
					value: 'listCertificateTasks',
					action: 'List SSL certificate tasks',
				},
				{
					name: 'Update Certificate By Resource Name',
					value: 'updateCertificateByResourceName',
					action: 'Update an SSL certificate on a web hosting resource (v2)',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update SSL service information',
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
		...(descriptionCertificateGetGet({
			...displayOptions,
			show: { sslOperation: ['getCertificate'] },
		}) || []),
		...(descriptionServiceInfosUpdatePut({
			...displayOptions,
			show: { sslOperation: ['updateServiceInfos'] },
		}) || []),
		...(descriptionServiceInfosGetGet({
			...displayOptions,
			show: { sslOperation: ['getServiceInfos'] },
		}) || []),
		...(descriptionTaskListGet({
			...displayOptions,
			show: { sslOperation: ['listCertificateTasks'] },
		}) || []),
		...(descriptionTaskGetGet({
			...displayOptions,
			show: { sslOperation: ['getCertificateTask'] },
		}) || []),
	];
}

export async function execute(this: IExecuteFunctions, itemIndex?: number) {
	const operation = this.getNodeParameter('sslOperation', itemIndex ?? 0, { extractValue: true });

	switch (operation) {
		case 'createCertificateByResourceName':
			return executeCreateCertificateByResourceName.call(this, itemIndex ?? 0);
		case 'getCertificate':
			return executeCertificateGetGet.call(this, itemIndex ?? 0);
		case 'getCertificateByResourceName':
			return executeGetCertificateByResourceName.call(this, itemIndex ?? 0);
		case 'getCertificateTask':
			return executeTaskGetGet.call(this, itemIndex ?? 0);
		case 'listAllDomains':
			return executeListAllDomains.call(this, itemIndex ?? 0);
		case 'listCertificateTasks':
			return executeTaskListGet.call(this, itemIndex ?? 0);
		case 'updateCertificateByResourceName':
			return executeUpdateCertificateByResourceName.call(this, itemIndex ?? 0);
		case 'updateServiceInfos':
			return executeServiceInfosUpdatePut.call(this, itemIndex ?? 0);
		case 'getServiceInfos':
			return executeServiceInfosGetGet.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ssl"`);
}

