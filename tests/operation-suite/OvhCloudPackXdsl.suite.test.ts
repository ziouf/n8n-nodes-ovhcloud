import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudPackXdsl',
	resource: 'packXdsl',
	operationParam: 'packXdslOperation',
	basePath: '/pack/xdsl',
	listSearchMethods: ['getPackXdslServices'],
	// POST /pack/xdsl/{packName}/{addressMove|migration}/servicesToDeleteUnpackTerms
	// renvoie un tableau ; l'op appelle data.map() — le mock POST shape-agnostique
	// retourne {} → crash. Classe réponse-shape.
	skipFiles: [
		'nodes/OvhCloudPackXdsl/resources/addressMove/servicesToDeleteUnpackTermsPost.operation.ts',
		'nodes/OvhCloudPackXdsl/resources/migration/servicesToDeleteUnpackTermsPost.operation.ts',
	],
});
