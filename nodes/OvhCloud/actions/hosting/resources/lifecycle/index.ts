/**
 * @brief Lifecycle operations for private database hosting
 */
export {
	description as descriptionChangeContact,
	execute as executeChangeContact,
} from './changeContact.operation';
export {
	description as descriptionChangeFtpPassword,
	execute as executeChangeFtpPassword,
} from './changeFtpPassword.operation';
export {
	description as descriptionChangeVersion,
	execute as executeChangeVersion,
} from './changeVersion.operation';
export {
	description as descriptionConfirmTermination,
	execute as executeConfirmTermination,
} from './confirmTermination.operation';
export {
	description as descriptionTerminate,
	execute as executeTerminate,
} from './terminate.operation';
