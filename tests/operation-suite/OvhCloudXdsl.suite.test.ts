import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudXdsl',
	resource: 'xdsl',
	operationParam: 'xdslOperation',
	basePath: '/xdsl',
	listSearchMethods: ['getXdslServices'],
	// POST /xdsl/{serviceName}/changeContact renvoie un tableau ; l'op appelle
	// data.map() — le mock POST shape-agnostique retourne {} → crash. Classe
	// réponse-shape.
	skipFiles: ['nodes/OvhCloudXdsl/resources/main/changeContactPost.operation.ts'],
});
