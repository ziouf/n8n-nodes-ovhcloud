import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// App operations  
import { description as appListGetDescription, execute as appListGetExecute } from './app/appListGet.operation';
import { description as appCreatePostDescription, execute as appCreatePostExecute } from './app/appCreatePost.operation';
import { description as appDetailGetDescription, execute as appDetailGetExecute } from './app/appGetGet.operation';
import { description as appUpdatePutDescription, execute as appUpdatePutExecute } from './app/appUpdatePut.operation';
import { description as appDeleteDeleteDescription, execute as appDeleteDeleteExecute } from './app/appDeleteDelete.operation';
import { description as startAppDescription, execute as startAppExecute } from './app/appStartPut.operation';
import { description as stopAppDescription, execute as stopAppExecute } from './app/appStopPut.operation';

// Job operations  
import { description as jobListGetDescription, execute as jobListGetExecute } from './job/jobListGet.operation';
import { description as jobCreatePostDescription, execute as jobCreatePostExecute } from './job/jobCreatePost.operation';
import { description as jobDetailGetDescription, execute as jobDetailGetExecute } from './job/jobGetGet.operation';
import { description as jobDeleteDeleteDescription, execute as jobDeleteDeleteExecute } from './job/jobDeleteDelete.operation';

// Notebook operations  
import { description as notebookListGetDescription, execute as notebookListGetExecute } from './notebook/notebookListGet.operation';
import { description as notebookCreatePostDescription, execute as notebookCreatePostExecute } from './notebook/notebookCreatePost.operation';
import { description as notebookDetailGetDescription, execute as notebookDetailGetExecute } from './notebook/notebookGetGet.operation';
import { description as notebookDeleteDeleteDescription, execute as notebookDeleteDeleteExecute } from './notebook/notebookDeleteDelete.operation';
import { description as notebookStartPutDescription, execute as notebookStartPutExecute } from './notebook/notebookStartPut.operation';

// Registry operations  
import { description as registryListGetDescription, execute as registryListGetExecute } from './registry/registryListGet.operation';
import { description as registryCreatePostDescription, execute as registryCreatePostExecute } from './registry/registryCreatePost.operation';

// Data Store operations  
import { description as dataStoreListGetDescription, execute as dataStoreListGetExecute } from './dataStore/dataListGet.operation';
import { description as dataStoreCreatePostDescription, execute as dataStoreCreatePostExecute } from './dataStore/dataCreatePost.operation';

// Alerting operations  
import { description as alertingListGetDescription, execute as alertingListGetExecute } from './alerting/alertListGet.operation';
import { description as alertingCreatePostDescription, execute as alertingCreatePostExecute } from './alerting/alertCreatePost.operation';

// Capabilities - Kubernetes  
import { description as kubeCapabilityListGetDescription, execute as kubeCapabilityListGetExecute } from './capabilities/kube/kubeListGet.operation';
import { description as kubeCapabilityDetailGetDescription, execute as kubeCapabilityDetailGetExecute } from './capabilities/kube/kubeGetGet.operation';

// Capabilities - Load Balancer  
import { description as lbCapabilityDetailGetDescription, execute as lbCapabilityDetailGetExecute } from './capabilities/loadbalancer/lbDetailGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const properties: INodeProperties[] = [];

	properties.push({
		displayName: 'Operation',
		name: 'publicCloudAiOperation',
		type: 'options',
		noDataExpression: true,
		options: [
			{ name: 'App Create Post', value: 'appCreatePost', action: 'Create a new AI App' },
			{ name: 'App Delete', value: 'appDeleteDelete', action: 'Delete an AI App' },
			{ name: 'App Detail Get', value: 'appDetailGet', action: 'Get details of an AI App' },
			{ name: 'App List', value: 'appListGet', action: 'List all AI Apps in a project' },
			{ name: 'App Start', value: 'startApp', action: 'Start an AI App lifecycle' },
			{ name: 'App Stop', value: 'stopApp', action: 'Stop an AI App lifecycle' },
			{ name: 'App Update Put', value: 'appUpdatePut', action: 'Update an existing AI App' },
			{ name: 'Create Alerting', value: 'alertingCreatePost', action: 'Create a new alerting rule' },
			{ name: 'Get Load Balancer Capability', value: 'lbCapabilityDetailGet', action: 'Get load balancer capabilities for a region' },
			{ name: 'Job Create Post', value: 'jobCreatePost', action: 'Create a new AI Job' },
			{ name: 'Job Delete', value: 'jobDeleteDelete', action: 'Delete an AI Job' },
			{ name: 'Job Detail Get', value: 'jobDetailGet', action: 'Get details of an AI Job' },
			{ name: 'Job List', value: 'jobListGet', action: 'List all AI Jobs in a project' },
			{ name: 'Kube Capabilities List', value: 'kubeCapabilityListGet', action: 'List all Kubernetes capabilities' },
			{ name: 'Kube Capability Detail Get', value: 'kubeCapabilityDetailGet', action: 'Get Kubernetes capability details by ID' },
			{ name: 'Notebook Create Post', value: 'notebookCreatePost', action: 'Create a new AI Notebook' },
			{ name: 'Notebook Delete', value: 'notebookDeleteDelete', action: 'Delete an AI Notebook' },
			{ name: 'Notebook Detail Get', value: 'notebookDetailGet', action: 'Get details of an AI Notebook' },
			{ name: 'Notebook List', value: 'notebookListGet', action: 'List all AI Notebooks in a project' },
			{ name: 'Notebook Start Put', value: 'notebookStartPut', action: 'Start an AI Notebook lifecycle' },
			{ name: 'Registry Create Post', value: 'registryCreatePost', action: 'Create a new Docker registry' },
			{ name: 'Registry List Get', value: 'registryListGet', action: 'List all Docker registries in a project' },
		],
		default: 'appListGet',
		displayOptions,
	});

	properties.push(...appListGetDescription());

	properties.push(
		...(appCreatePostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['appCreatePost'] } }) as INodeProperties[]),
	);
	properties.push(
		...(appDetailGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['appDetailGet'] } }) as INodeProperties[]),
	);
	properties.push(
		...(appUpdatePutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['appUpdatePut'] } }) as INodeProperties[]),
	);
	properties.push(
		...(appDeleteDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['appDeleteDelete'] } }) as INodeProperties[]),
	);
	properties.push(
		...(startAppDescription({ ...displayOptions, show: { publicCloudAiOperation: ['startApp'] } }) as INodeProperties[]),
	);
	properties.push(
		...(stopAppDescription({ ...displayOptions, show: { publicCloudAiOperation: ['stopApp'] } }) as INodeProperties[]),
	);

	properties.push(...jobListGetDescription());
	properties.push(
		...(jobCreatePostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['jobCreatePost'] } }) as INodeProperties[]),
	);
	properties.push(
		...(jobDetailGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['jobDetailGet'] } }) as INodeProperties[]),
	);
	properties.push(
		...(jobDeleteDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['jobDeleteDelete'] } }) as INodeProperties[]),
	);

	properties.push(...notebookListGetDescription());
	properties.push(
		...(notebookCreatePostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['notebookCreatePost'] } }) as INodeProperties[]),
	);
	properties.push(
		...(notebookDetailGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['notebookDetailGet'] } }) as INodeProperties[]),
	);
	properties.push(
		...(notebookDeleteDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['notebookDeleteDelete'] } }) as INodeProperties[]),
	);
	properties.push(
		...(notebookStartPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['notebookStartPut'] } }) as INodeProperties[]),
	);

	properties.push(...registryListGetDescription());
	properties.push(
		...(registryCreatePostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['registryCreatePost'] } }) as INodeProperties[]),
	);

	properties.push(...dataStoreListGetDescription());
	properties.push(
		...(dataStoreCreatePostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['dataStoreCreatePost'] } }) as INodeProperties[]),
	);

	properties.push(...alertingListGetDescription());
	properties.push(
		...(alertingCreatePostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['alertingCreatePost'] } }) as INodeProperties[]),
	);

	properties.push(...kubeCapabilityListGetDescription());
	properties.push(
		...(kubeCapabilityDetailGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['kubeCapabilityDetailGet'] } }) as INodeProperties[]),
	);

	properties.push(
		...(lbCapabilityDetailGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['lbCapabilityDetailGet'] } }) as INodeProperties[]),
	);

	return properties;
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('publicCloudAiOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'appCreatePost': return appCreatePostExecute.call(this);
		case 'appDeleteDelete': return appDeleteDeleteExecute.call(this);
		case 'appDetailGet': return appDetailGetExecute.call(this);
		case 'appListGet': return appListGetExecute.call(this);
		case 'startApp': return startAppExecute.call(this);
		case 'stopApp': return stopAppExecute.call(this);
		case 'appUpdatePut': return appUpdatePutExecute.call(this);

		case 'alertingCreatePost': return alertingCreatePostExecute.call(this);
		case 'alertingListGet': return alertingListGetExecute.call(this);

		case 'lbCapabilityDetailGet': return lbCapabilityDetailGetExecute.call(this);

		case 'jobCreatePost': return jobCreatePostExecute.call(this);
		case 'jobDeleteDelete': return jobDeleteDeleteExecute.call(this);
		case 'jobDetailGet': return jobDetailGetExecute.call(this);
		case 'jobListGet': return jobListGetExecute.call(this);

		case 'kubeCapabilityDetailGet': return kubeCapabilityDetailGetExecute.call(this);
		case 'kubeCapabilityListGet': return kubeCapabilityListGetExecute.call(this);

		case 'notebookCreatePost': return notebookCreatePostExecute.call(this);
		case 'notebookDeleteDelete': return notebookDeleteDeleteExecute.call(this);
		case 'notebookDetailGet': return notebookDetailGetExecute.call(this);
		case 'notebookListGet': return notebookListGetExecute.call(this);
		case 'notebookStartPut': return notebookStartPutExecute.call(this);

		case 'dataStoreCreatePost': return dataStoreCreatePostExecute.call(this);
		case 'dataStoreListGet': return dataStoreListGetExecute.call(this);

		case 'registryCreatePost': return registryCreatePostExecute.call(this);
		case 'registryListGet': return registryListGetExecute.call(this);

		default: throw new Error(`Unsupported operation "${operation}" for resource "publicCloudAi"`);
	}
}
