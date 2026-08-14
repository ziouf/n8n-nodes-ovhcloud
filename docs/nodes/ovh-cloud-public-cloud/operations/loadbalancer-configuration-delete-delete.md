# OVH Cloud Public Cloud — Delete LB Configuration

> Opération `loadbalancerConfigurationDeleteDelete` · Fichier source : `nodes/OvhCloudPublicCloud/loadbalancer/configurationDeleteDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/cloud/project/{projectId}{loadBalancerId}{version}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `loadBalancerId` | string | Oui |
| `version` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
