# OVH Cloud Dedicated Cloud — Check Ability to Convert Datastore to Global Datastore

> Opération `filerCheckGlobalCompatible` · Fichier source : `nodes/OvhCloudDedicatedCloud/filer/filerCheckGlobalCompatible.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}{filerId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `filerId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
