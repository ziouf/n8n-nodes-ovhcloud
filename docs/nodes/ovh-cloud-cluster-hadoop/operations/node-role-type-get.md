# OVH Cloud Cluster Hadoop — Get Node Role Properties

> Opération `nodeRoleTypeGet` · Fichier source : `nodes/OvhCloudClusterHadoop/resources/node/nodeRoleTypeGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cluster/hadoop/{param}{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `hostname` | string | Oui |
| `type` | options | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
