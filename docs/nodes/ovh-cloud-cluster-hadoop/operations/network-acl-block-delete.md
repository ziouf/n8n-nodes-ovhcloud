# OVH Cloud Cluster Hadoop — Delete Network ACL

> Opération `networkAclBlockDelete` · Fichier source : `nodes/OvhCloudClusterHadoop/resources/networkAcl/networkAclBlockDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/cluster/hadoop/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `block` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
