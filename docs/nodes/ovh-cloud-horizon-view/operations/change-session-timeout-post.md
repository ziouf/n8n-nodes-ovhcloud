# OVH Cloud Horizon View — Change Access Point Session Timeout

> Opération `changeSessionTimeoutPost` · Fichier source : `nodes/OvhCloudHorizonView/resources/accessPoint/changeSessionTimeoutPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/horizonView/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `accessPointId` | string | Oui |
| `expiration` | number | Oui |
| `onSingleAP` | options | — |
| `Private Access Point` | — | — |
| `Public Access Point` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
