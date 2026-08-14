# OVH Cloud Nutanix — Update Nutanix Cluster

> Opération `updatePut` · Fichier source : `nodes/OvhCloudNutanix/resources/updatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/nutanix/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `controlPanelURL` | string | Oui |
| `dataserviceIp` | string | Oui |
| `erasureCoding` | boolean | Oui |
| `gatewayCidr` | string | Oui |
| `infraVlanNumber` | number | Oui |
| `ipfo` | string | Oui |
| `iplb` | string | Oui |
| `license` | string | Oui |
| `prismElementVip` | string | Oui |
| `prismSecretId` | string | Oui |
| `rackAwareness` | boolean | Oui |
| `redundancyFactor` | number | Oui |
| `version` | string | Oui |
| `vrack` | string | Oui |
| `redeploycluster` | boolean | — |
| `scaleOut` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
