import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionPackDeleteDelete,
	execute as executePackDeleteDelete,
} from './packDeleteDelete.operation';
import {
	description as descriptionPackGetGet,
	execute as executePackGetGet,
} from './packGetGet.operation';
import {
	description as descriptionPackListGet,
	execute as executePackListGet,
} from './packListGet.operation';
import {
	description as descriptionPackUpdatePut,
	execute as executePackUpdatePut,
} from './packUpdatePut.operation';
import {
	description as descriptionReinstallPost,
	execute as executeReinstallPost,
} from './reinstallPost.operation';
import {
	description as descriptionServiceInfosGetGet,
	execute as executeServiceInfosGetGet,
} from './serviceInfosGetGet.operation';

const { description, execute } = createOperationDispatcher(
	'packOperation',
	'ovhCloudPack',
	[
	{
		name: 'Delete Pack',
		value: 'packDeleteDelete',
		action: 'Delete a pack service',
		execute: executePackDeleteDelete,
		description: descriptionPackDeleteDelete,
	},
	{
		name: 'Get Pack',
		value: 'packGetGet',
		action: 'Get pack service details',
		execute: executePackGetGet,
		description: descriptionPackGetGet,
	},
	{
		name: 'Get Service Infos',
		value: 'serviceInfosGetGet',
		action: 'Get service information for a pack',
		execute: executeServiceInfosGetGet,
		description: descriptionServiceInfosGetGet,
	},
	{
		name: 'List Packs',
		value: 'packListGet',
		action: 'List all pack services',
		execute: executePackListGet,
		description: descriptionPackListGet,
		default: true,
	},
	{
		name: 'Reinstall Pack',
		value: 'reinstallPost',
		action: 'Reinstall a pack service',
		execute: executeReinstallPost,
		description: descriptionReinstallPost,
	},
	{
		name: 'Update Pack',
		value: 'packUpdatePut',
		action: 'Update pack service details',
		execute: executePackUpdatePut,
		description: descriptionPackUpdatePut,
	},
	],
);

export { description, execute };
