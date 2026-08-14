# OVH Cloud Ovh Cloud Connect — Create POP Datacenter Extra Configuration

> Opération `popDatacenterExtraPost` · Fichier source : `nodes/OvhCloudOvhCloudConnect/resources/config/popDatacenterExtraPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/ovhCloudConnect/{param}{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `popId` | number | Oui |
| `datacenterId` | number | Oui |
| `nexthop` | string | Oui |
| `subnet` | string | Oui |
| `type` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
