# OVH Cloud Cluster Hadoop — Update Network ACL

> Opération `networkAclBlockPut` · Fichier source : `nodes/OvhCloudClusterHadoop/resources/networkAcl/networkAclBlockPut.operation.ts`

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
| `block` | string | Oui |
| `description` | string | — |
| `state` | options | — |
| `Disabled` | — | — |
| `Enabled` | — | — |
| `Pending` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
