# OVH Cloud Public Cloud — kubeNodepoolListNodepoolNodesGet

> Opération `kubeNodepoolListNodepoolNodesGet` · Fichier source : `nodes/OvhCloudPublicCloud/kube/kubeNodepoolListNodepoolNodesGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{serviceName}{kubeId}{nodePoolId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `kubeId` | string | Oui |
| `nodePoolId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
