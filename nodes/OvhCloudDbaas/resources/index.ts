/**
 * @brief DBaaS sub-resource operations for n8n node
 *
 * Aggregates all DBaaS sub-resource operation modules including:
 * - serviceInfos: Get and update service information
 * - changeContact: Change admin, billing, or tech contact
 * - urls: List URLs for the service
 * - metrics: Get service metrics
 * - operations: List and get operations
 * - clusters: Manage clusters and retentions
 * - encryptionKeys: Manage encryption keys
 * - inputs: Manage log inputs
 * - inputEngines: Manage input engines and helpers
 * - graylogStreams: Manage Graylog streams
 * - streamAlerts: Manage stream alerts
 * - streamRules: Manage stream rules
 * - streamArchives: Manage stream archives
 * - streamSubscriptions: Manage stream subscriptions
 * - graylogDashboards: Manage Graylog dashboards
 * - openSearchIndexes: Manage OpenSearch indexes
 * - openSearchAliases: Manage OpenSearch aliases
 * - openSearchDashboards: Manage OpenSearch dashboards
 * - roles: Manage roles
 * - roleMembers: Manage role members
 * - rolePermissions: Manage role permissions
 * - tokens: Manage tokens
 * - user: User operations
 */
export * as serviceInfos from './serviceInfos';
export * as changeContact from './changeContact';
export * as urls from './urls';
export * as metrics from './metrics';
export * as operations from './operations';
export * as clusters from './clusters';
export * as encryptionKeys from './encryptionKeys';
export * as inputs from './inputs';
export * as inputEngines from './inputEngines';
export * as graylogStreams from './graylogStreams';
export * as streamAlerts from './streamAlerts';
export * as streamRules from './streamRules';
export * as streamArchives from './streamArchives';
export * as streamSubscriptions from './streamSubscriptions';
export * as graylogDashboards from './graylogDashboards';
export * as openSearchIndexes from './openSearchIndexes';
export * as openSearchAliases from './openSearchAliases';
export * as openSearchDashboards from './openSearchDashboards';
export * as roles from './roles';
export * as roleMembers from './roleMembers';
export * as rolePermissions from './rolePermissions';
export * as tokens from './tokens';
export * as user from './user';
