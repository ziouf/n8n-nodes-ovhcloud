# OVH Cloud Horizon View — Add Access Point

> Opération `accessPointPost` · Fichier source : `nodes/OvhCloudHorizonView/resources/accessPoint/accessPointPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/horizonView/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `poolType` | options | Oui |
| `Hybrid Pool` | — | — |
| `Private Pool` | — | — |
| `Public Pool` | — | — |
| `privateBlock` | string | — |
| `privateVlan` | number | — |
| `vrouterPoolPublicIp` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
