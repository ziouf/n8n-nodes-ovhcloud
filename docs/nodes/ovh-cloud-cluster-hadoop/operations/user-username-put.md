# OVH Cloud Cluster Hadoop — Update User

> Opération `userUsernamePut` · Fichier source : `nodes/OvhCloudClusterHadoop/resources/user/userUsernamePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cluster/hadoop/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `username` | string | Oui |
| `clouderaManager` | boolean | — |
| `httpFrontend` | boolean | — |
| `hue` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
