# OVH Cloud Cluster Hadoop — Stop Node Role

> Opération `nodeRoleTypeStopPost` · Fichier source : `nodes/OvhCloudClusterHadoop/resources/node/nodeRoleTypeStopPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cluster/hadoop/{param}{param}{param}` |

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
