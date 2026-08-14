# OVH Cloud Vps — Update Disk

> Opération `updateDiskPut` · Fichier source : `nodes/OvhCloudVps/diskUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/vps/{serviceName}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `diskId` | string | Oui |
| `name` | string | — |
| `sizeInGB` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
