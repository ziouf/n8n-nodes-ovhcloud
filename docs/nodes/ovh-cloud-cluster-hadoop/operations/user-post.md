# OVH Cloud Cluster Hadoop — Add Cluster User

> Opération `userPost` · Fichier source : `nodes/OvhCloudClusterHadoop/resources/user/userPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cluster/hadoop/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `username` | string | Oui |
| `password` | string | Oui |
| `clouderaManager` | boolean | — |
| `httpFrontend` | boolean | — |
| `hue` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
