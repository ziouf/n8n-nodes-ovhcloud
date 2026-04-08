/**
 * @brief Database operations for web hosting
 */
export {
	description as descriptionList,
	execute as executeList,
} from './list.operation';
export {
	description as descriptionGet,
	execute as executeGet,
} from './get.operation';
export {
	description as descriptionCreate,
	execute as executeCreate,
} from './create.operation';
export {
	description as descriptionUpdate,
	execute as executeUpdate,
} from './update.operation';
export {
	description as descriptionDelete,
	execute as executeDelete,
} from './delete.operation';
export * as copy from './copy';
export * as dump from './dump';
