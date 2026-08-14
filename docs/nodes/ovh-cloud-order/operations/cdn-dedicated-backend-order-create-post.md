# OVH Cloud Order — Create CDN Dedicated Backend

> Opération `cdnDedicatedBackendOrderCreatePost` · Fichier source : `nodes/OvhCloudOrder/cdn/cdnDedicatedBackendOrderCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/cdn/dedicated/{serviceName}{duration}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `duration` | string | Oui |
| `backend` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
