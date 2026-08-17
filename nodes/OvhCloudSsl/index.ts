import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionCertificateGetGet,
	execute as executeCertificateGetGet,
} from './resources/certificateGetGet.operation';
import {
	description as descriptionCreateCertificateByResourceName,
	execute as executeCreateCertificateByResourceName,
} from './resources/createCertificateByResourceName.operation';
import {
	description as descriptionGetCertificateByResourceName,
	execute as executeGetCertificateByResourceName,
} from './resources/getCertificateByResourceName.operation';
import {
	description as descriptionListAllDomains,
	execute as executeListAllDomains,
} from './resources/listAllDomains.operation';
import {
	description as descriptionServiceInfosGetGet,
	execute as executeServiceInfosGetGet,
} from './resources/serviceInfosGetGet.operation';
import {
	description as descriptionServiceInfosUpdatePut,
	execute as executeServiceInfosUpdatePut,
} from './resources/serviceInfosUpdatePut.operation';
import {
	description as descriptionTaskGetGet,
	execute as executeTaskGetGet,
} from './resources/taskGetGet.operation';
import {
	description as descriptionTaskListGet,
	execute as executeTaskListGet,
} from './resources/taskListGet.operation';
import {
	description as descriptionUpdateCertificateByResourceName,
	execute as executeUpdateCertificateByResourceName,
} from './resources/updateCertificateByResourceName.operation';

const { description, execute } = createOperationDispatcher(
	'sslOperation',
	'ssl',
	[
	{
		name: 'Create Certificate By Resource Name',
		value: 'createCertificateByResourceName',
		action: 'Create an SSL certificate for a web hosting resource (v2)',
		execute: executeCreateCertificateByResourceName,
		description: descriptionCreateCertificateByResourceName,
	},
	{
		name: 'Get Certificate',
		value: 'getCertificate',
		action: 'Get SSL certificate details',
		execute: executeCertificateGetGet,
		description: descriptionCertificateGetGet,
	},
	{
		name: 'Get Certificate By Resource Name',
		value: 'getCertificateByResourceName',
		action: 'Get an SSL certificate for a web hosting resource by its name (v2)',
		execute: executeGetCertificateByResourceName,
		description: descriptionGetCertificateByResourceName,
	},
	{
		name: 'Get Certificate Task',
		value: 'getCertificateTask',
		action: 'Get a specific SSL certificate task',
		execute: executeTaskGetGet,
		description: descriptionTaskGetGet,
	},
	{
		name: 'Get Service Infos',
		value: 'getServiceInfos',
		action: 'Get SSL service information',
		execute: executeServiceInfosGetGet,
		description: descriptionServiceInfosGetGet,
	},
	{
		name: 'List All Domains',
		value: 'listAllDomains',
		action: 'List all SSL certificate domains',
		execute: executeListAllDomains,
		description: descriptionListAllDomains,
		show: false,
		default: true,
	},
	{
		name: 'List Certificate Tasks',
		value: 'listCertificateTasks',
		action: 'List SSL certificate tasks',
		execute: executeTaskListGet,
		description: descriptionTaskListGet,
	},
	{
		name: 'Update Certificate By Resource Name',
		value: 'updateCertificateByResourceName',
		action: 'Update an SSL certificate on a web hosting resource (v2)',
		execute: executeUpdateCertificateByResourceName,
		description: descriptionUpdateCertificateByResourceName,
	},
	{
		name: 'Update Service Infos',
		value: 'updateServiceInfos',
		action: 'Update SSL service information',
		execute: executeServiceInfosUpdatePut,
		description: descriptionServiceInfosUpdatePut,
	},
	],
);

export { description, execute };
