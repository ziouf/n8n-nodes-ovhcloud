# OVH Cloud Horizon View — Change Customer User Password

> Opération `customerUserChangePasswordPost` · Fichier source : `nodes/OvhCloudHorizonView/resources/dedicatedHorizon/customerUserChangePasswordPost.operation.ts`

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
| `username` | string | Oui |
| `password` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
