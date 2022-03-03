import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const showcaseLocalizations = () => {
  return db.showcaseLocalization.findMany()
}

export const showcaseLocalization = ({
  id,
}: Prisma.ShowcaseLocalizationWhereUniqueInput) => {
  return db.showcaseLocalization.findUnique({
    where: { id },
  })
}

interface CreateShowcaseLocalizationArgs {
  input: Prisma.ShowcaseLocalizationCreateInput
}

export const createShowcaseLocalization = ({
  input,
}: CreateShowcaseLocalizationArgs) => {
  return db.showcaseLocalization.create({
    data: input,
  })
}

interface UpdateShowcaseLocalizationArgs
  extends Prisma.ShowcaseLocalizationWhereUniqueInput {
  input: Prisma.ShowcaseLocalizationUpdateInput
}

export const updateShowcaseLocalization = ({
  id,
  input,
}: UpdateShowcaseLocalizationArgs) => {
  return db.showcaseLocalization.update({
    data: input,
    where: { id },
  })
}

export const deleteShowcaseLocalization = ({
  id,
}: Prisma.ShowcaseLocalizationWhereUniqueInput) => {
  return db.showcaseLocalization.delete({
    where: { id },
  })
}
