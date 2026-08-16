import type { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';
import type { OperationEntry } from '../../shared/nodes/createNodeDispatcher';

// Secret operations
import * as retrievePost from './resources/retrievePost.operation';

const entries: OperationEntry[] = [
  // L'ancien description() n'appelait jamais retrievePost.description(), donc on ne montre pas non plus les propriétés de l'opération dans la sortie.
  {
    value: 'retrievePost',
    name: 'Retrieve Secret',
    action: "Retrieve a secret sent by email",
    default: true,
    show: false, // ancien code : spread absent → entry.show === false pour ne pas ajouter de displayOptions sur le picker
    execute: retrievePost.execute as OperationEntry['execute'],
    description: () => [],
  },
];

const dispatcher = createOperationDispatcher('secretOperation', 'Secret', entries);

// Le factory ajoute displayOptions:{} au picker ; on l'omet pour reproduire la sortie de l'ancienne version.
export const description: (displayOptions?: IDisplayOptions) => INodeProperties[] = (opts): INodeProperties[] => {
  return dispatcher.description(opts ?? {}).map((p): INodeProperties => {
    if ('displayOptions' in p && !Object.keys(p.displayOptions as Record<string, unknown>).length) {
      // Supprime le champ displayOptions vide pour correspondre à l'ancienne signature.
      const cleaned = Object.fromEntries(
        Object.entries(p).filter(([k]) => k !== 'displayOptions'),
      );
      return cleaned as INodeProperties;
    }
    return p;
  });
};

export const execute = dispatcher.execute;
