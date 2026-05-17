export { ApiClient } from './transport/ApiClient';
export { CredentialHolder } from './transport/CredentialHolder';
export type { OvhCredentialsType } from './transport/CredentialHolder';
export { OvhCloudApiSecretName, OvhCloudIcon } from './constants';
export {
	getServiceIds,
	getEmailDomains,
	getVpsServices,
	getDedicatedCloudServices,
	getDedicatedCephServices,
	getDedicatedClusterServices,
	getDedicatedHousingServices,
	getDedicatedNashaServices,
	getDedicatedServerServices,
} from './methods';
