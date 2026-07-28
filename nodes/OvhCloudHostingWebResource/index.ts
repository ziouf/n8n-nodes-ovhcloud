import type { IExecuteFunctions, IDisplayOptions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Resource operations - listGetResource case + displayDescription push; getByName for getResource
import { description as resourceListGetDescription, execute as resourceListGetExecute } from './resource/listGet.operation';
import { description as getResourceByNameDescription, execute as getResourceByNameExecute } from './resource/getByNameGet.operation';

// Attached Domain - createPost used in switch+push; listByResourceGet only pushed (displayOptions)
import { description as createPostDescription, execute as createPostExecute } from './attachedDomain/createPost.operation';
import { description as listByResourceGetDescription } from './attachedDomain/listByResourceGet.operation';

// Website - both descriptions used in displayOptions pushes; no switch cases yet  
import { description as createWebsitePostDescription } from './website/createPost.operation';
import { description as deleteDeleteByWebsiteIdGetDescription } from './website/deleteDeleteByWebsiteIdGet.operation';

// SSL - importCustomCertificatePostExecute used in switch only (no display push needed)
import { execute as importCustomCertificatePostExecute } from './ssl/importCustomCertificatePost.operation';

// User - deleteUserExecute used in switch only  
import { execute as deleteUserExecute } from './user/deleteUser.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const properties: INodeProperties[] = [];

	properties.push({
		displayName: 'Operation',
		name: 'webResourceOperation',  
		type: 'options' as const,
		noDataExpression: true,
		options: [
			{ name: 'Attached Domain Create Post', value: 'attachedDomainCreatePost' },
			{ name: 'Delete User Operation', value: 'deleteUser' },
			{ name: 'Get Attached Domain Detail By Name Get', value: 'getByNameGet' },
			{ name: 'Import Custom Certificate Post', value: 'importCustomCertificatePost' },
			{ name: 'List Resource List Get', value: 'listGetResource' },
			{ name: 'SSL List By Resource Get', value: 'sslListByResourceGet' },
			{ name: 'Update User Put By ID Get', value: 'updateUserPutByIdGet' },
			{ name: 'Website Create Post', value: 'createWebsitePost' },
			{ name: 'Website List Get (Resource)', value: 'websiteListGetByResourceNameGet' },
			{ name: 'Website Update Put By Website ID Get', value: 'updatePutByWebsiteIdGet' },
		],
		default: 'listGetResource',
		displayOptions,
	});

	properties.push(
		...(resourceListGetDescription() as INodeProperties[]),
	);
	properties.push(
		...(getResourceByNameDescription({
			...displayOptions, show: { webResourceOperation: ['listGetResource'] },
		}) as INodeProperties[]),
	);

	properties.push(
		...(createPostDescription({
			...displayOptions, show: { webResourceOperation: ['attachedDomainCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(listByResourceGetDescription({
			...displayOptions, show: { webResourceOperation: ['sslListByResourceGet'] },
		}) as INodeProperties[]),
	);

	properties.push(
		...(createWebsitePostDescription({
			...displayOptions, show: { webResourceOperation: ['createWebsitePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(deleteDeleteByWebsiteIdGetDescription({
			...displayOptions, show: { webResourceOperation: ['updatePutByWebsiteIdGet'] },
		}) as INodeProperties[]),
	);

	return properties;
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('webResourceOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'attachedDomainCreatePost': return createPostExecute.call(this);
		case 'deleteUser': return deleteUserExecute.call(this);
		case 'getByNameGet': return getResourceByNameExecute.call(this);
		case 'importCustomCertificatePost': return importCustomCertificatePostExecute.call(this);
		case 'listGetResource': return resourceListGetExecute.call(this);
		default: throw new Error(`Unsupported operation "${operation}" for resource "webHostingResource"`);
	}
}
