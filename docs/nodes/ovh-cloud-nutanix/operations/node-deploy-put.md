# OVH Cloud Nutanix — Deploy Node

> Opération `nodeDeployPut` · Fichier source : `nodes/OvhCloudNutanix/resources/nodeDeployPut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/nutanix/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `server` | string | Oui |
| `ahvIp` | string | — |
| `cvmIp` | string | — |
| `version` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
